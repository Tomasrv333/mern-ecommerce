import bcryptjs from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { name, lastname, email, password, role } = req.body;

    if (!name || !lastname || !email || !password) {
        return next({ status: 400, message: 'Faltan campos obligatorios' });
    }
    
    const userExists = await User.findOne({ email })

    if (userExists) {
        return res.status(400).json({ error: 'Este email ya esta registrado' })
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ error: 'El email no es valido' })
    }

    try{
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(req.body.password, salt);

        const newUser = new User({
            name,
            lastname,
            email,
            password: hashedPassword,
            role,
            cart: [],
        });
        await newUser.save();
        return res.status(201).json('New user created');
    }catch(err) {
        console.log(err);
        return next(err);
    }
};

export const login = async (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return next({ status: 400, message: 'Email or password required' });
    }
    try{
        const user = await User.findOne({email: req.body.email}).select(
            'name email password'
        );
        if(!user){
            return next({status: 404, message: 'No user found'});
        }
        const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password)
        if(!isPasswordCorrect){
            return next({status: 400, message: 'Password is incorrect'});
        }
        const payload = {
            id: user._id,
            name: user.name
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })
        return res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).
        json({'message': 'login success'})
    }catch(err){
        console.log(err);
        return next(err);
    }
};

export const logout = (req, res) => {
    res.clearCookie('access_token');
    return res.status(200).json({message: 'Logout Success'});
};

export const isLoggedIn = (req, res) => {
    const token = req.cookies.access_token;
    if(!token) {
        return res.json(false)
    }
    return jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if(err) {
            return res.json(false);
        }
        return res.json(true);
    })
}