export const getAllProduct = async (req, res, next) => {
    try{
        const tasks = await Task.find({})
        return res.status(200).json(tasks);
    } catch(err) {
        return next(err);
    }
}

export const getOneProduct = async (req, res, next) => {
    try{
        const tasks = await Task.find({})
        return res.status(200).json(tasks);
    } catch(err) {
        return next(err);
    }
}

export const postOneProduct = async (req, res, next) => {
    try{
        const tasks = await Task.find({})
        return res.status(200).json(tasks);
    } catch(err) {
        return next(err);
    }
}

export const updateOneProduct = async (req, res, next) => {
    try{
        const tasks = await Task.find({})
        return res.status(200).json(tasks);
    } catch(err) {
        return next(err);
    }
}

export const deleteOneProduct = async (req, res, next) => {
    try{
        const tasks = await Task.find({})
        return res.status(200).json(tasks);
    } catch(err) {
        return next(err);
    }
}

