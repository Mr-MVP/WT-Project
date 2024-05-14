import { Schema, model } from 'mongoose'
import { genSalt, hash, compare } from 'bcrypt'
import pkg from 'validator';
const { isEmail, isStrongPassword } = pkg;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

userSchema.statics.signup = async function (username, email, password) {

    if (!email || !password || !username) {
        throw Error('All fields must be filled')
    }
    if (!isEmail(email)) {
        throw Error('Email not valid')
    }

    if (!isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const emailexists = await model('User').findOne({ email })
    const userNameexists = await model('User').findOne({ username })

    if (emailexists) {
        throw Error('Email already in use')
    }
    if (userNameexists) {
        throw Error('Username already in use')
    }

    const salt = await genSalt(10)
    const hashedPassword = await hash(password, salt)

    const user = await model('User').create({ username, email, password: hashedPassword })

    return user
}

userSchema.statics.login = async function (email, password) {

    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await model('User').findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

const user = model('User', userSchema);

export default user;
