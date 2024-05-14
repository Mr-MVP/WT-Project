import { Router } from 'express'
import user from '../controllers/user.js'
const { loginUser, signupUser } = user

const router = Router()

router.post('/login', loginUser)

router.post('/signup', signupUser)

export default router