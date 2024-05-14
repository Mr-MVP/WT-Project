import user from '../models/user.js';
const { signup, login } = user;
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import dotenv from 'dotenv'
dotenv.config()

const createToken = (_id) => {
    return sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await login(email, password)

        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const signupUser = async (req, res) => {
    const { username, email, password, role } = req.body

    try {
        const user = await signup(username, email, password, role)

        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export default { signupUser, loginUser }