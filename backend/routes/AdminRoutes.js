import express from 'express';
import User from '../models/User.js';

const route = express()

route.put('/make-doctor', async (req, res) => {
    try {
        const { _id } = req.body

        await User.findByIdAndUpdate(_id, { userType: 'doctor' })

        res.status(200).json({ message: 'User type updated successfully' })
    } catch (error) {
        return res.status(500).json({ error: error })
    }
})

route.put('/make-admin', async (req, res) => {
    try {
        const { _id } = req.body
        
        await User.findByIdAndUpdate(_id, { userType: 'admin' })
        
        res.status(200).json({ message: 'User type updated successfully' })
        
    } catch (error) {
        return res.status(500).json({ error: error })
    }
})

export default route;

