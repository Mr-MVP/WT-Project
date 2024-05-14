import { verify } from 'jsonwebtoken'
import { findById } from '../models/user'

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'You must be logged in' })
    }

    const token = authorization.split(' ')[1]

    try {
        const { _id } = verify(token, process.env.SECRET)
        const user = await findById(_id).select('_id');
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Request is not authorized' })
    }
}

export default requireAuth