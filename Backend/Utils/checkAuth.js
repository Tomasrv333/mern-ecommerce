import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const checkUserAuth = async (req, res, next) => {
    const token = req.cookies.access_token;
    
    if(!token){
        return next({ status: 401, message: 'Unauthorized' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userId = decoded.id;
        const user = await User.findOne({_id: userId })
        console.log(user.role)

        if (user.role !== 'user' && user.role !== 'admin') {
            return res.status(401).json({ message: 'Usuario no autenticado' })
        }
        req.user = decoded
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token invalido' })
    };
};

export const checkAdminAuth = async (req, res, next) => {
    const token = req.cookies.access_token;
    
    if(!token){
        return next({ status: 401, message: 'Unauthorized' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userId = decoded.id;
        const user = await User.findOne({_id: userId })

        if (user.role !== 'admin') {
            return res.status(401).json({ message: 'Usuario no autenticado' })
        }
        req.user = decoded
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token invalido' })
    };
};
