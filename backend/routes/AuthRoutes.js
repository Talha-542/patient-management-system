import express from 'express';
import User from '../models/User';
import dotenv from 'dotenv'
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

dotenv.config()

const router = express()

const salt = bycrypt.genSaltSync(10)
const secret = process.env.SECRET

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Enter both fields' })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const newUser = await User.create({ email: email, password: bycrypt.hashSync(password, salt) })

        res.json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Enter both fields' })
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'Email not found' });
        }

        if (bycrypt.compareSync(password, user.password)) {
            jwt.sign({email, id:user._id, userType:user.userType}, secret, {}, (err, token) => {
                if (err) throw err
                res.cookie('token', token).json({
                    id: user._id,
                    email,
                    userType: user.userType
                })
            })
        } else {
            return res.status(400).json({ error: 'Incorrect password' });
        }
    } catch (error) {
        res.status(500).json(error)
    }
})






export default router;

