import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const checkUserAuth = async (req, res, next) => {
    const token = req.cookies.access_token;
    
    if(!token){
        return next({ status: 401, message: 'Unauthorized' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.user;

        if (req.user.role !== 'user') {
            return res.status(401).json({ message: 'Usuario no autenticado' })
        }

        req.user = user;
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

        req.user = decoded.user;

        if (req.user.role !== 'admin') {
            return res.status(401).json({ message: 'Admin no autenticado' })
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token invalido' })
    };
};
