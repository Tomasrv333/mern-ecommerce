import User from "../../models/User.js";

export const getUserProfile = async (req, res, next) => {
    try{
        const data = await User.findById(req.user.id).select('name email role');
        return res.status(200).json(data);
    }catch(err) {
        return next(err);
    }
}

export const updateUserProfile = async (req, res, next) => {
    try{
        const updateProfile = await User.findByIdAndUpdate(req.user.id, {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role
        }, {
            new: true
        }).select('name email role');
        return res.status(200).json(updateProfile)
    } catch(err) {
        return next(err);
    }
}