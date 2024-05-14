import User from '../models/user.js';
import pkg from 'jsonwebtoken';
const { verify } = pkg;

const isAdmin = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'You must be logged in' })
    }

    const token = authorization.split(' ')[1]

    try {
        const { _id } = verify(token, process.env.SECRET)
        const user = await User.findById(_id);
        console.log(user)
        if (user.role !== 'admin') {
            return res.status(401).json({ error: 'You are not authorized' })
        }
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Request is not authorized' })
    }
};

export default isAdmin;