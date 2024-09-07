import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import DoctorPatientRel from '../models/DoctorPatientRel.js';
import MedicalImage from '../models/MedicalImages.js';
import upload from '../middleware/multer.js';
import cloudinary from '../utils/cloudinary.js';

dotenv.config()

const router = express()

router.post('/select-patient', async (req, res) => {
    
    const { token } = req.cookies
    
    jwt.verify(token, process.env.SECRET, {}, async (err, info) => {
        if (err) return res.status(400).json({ error: err })
        
        const { _id } = req.body

        const newRel = await DoctorPatientRel.create({
            doctor: info._id,
            patient: _id
        })

        res.json({ success: 'Patient selected successfully' })
    })
})

router.post('/remove-patient', async (req, res) => {
    
    const { token } = req.cookies
    
    jwt.verify(token, process.env.SECRET, {}, async (err, info) => {
        if (err) return res.status(400).json({ error: err })
        
        const { _id } = req.body
        
        await DoctorPatientRel.deleteOne({
            doctor: info._id,
            patient: _id
        })

        res.json({ success: 'Patient removed successfully' })
    
    })
})

router.get('/get-patients', async (req, res) => {
    try {
        const { token } = req.cookies
        
        jwt.verify(token, process.env.SECRET, {}, async (err, info) => {
            if (err) return res.status(400).json({ error: err })
            
            const patients = await DoctorPatientRel.find({ doctor: info._id })
            .populate({
                path: 'patient',
                select: 'name email'
            })
    
            return res.status(200).json({patients})
        })
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.post('/add-medical-image', upload.single('image'), async (req, res) => {

    try {
        const { token } = req.cookies
        
        jwt.verify(token, process.env.SECRET, {}, async (err, info) => {
            if (err) return res.status(400).json({ error: err })
            
            const { _id, title } = req.body
    
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'devathon',
                width: 500,
                height: 500,
                crop: 'fill'
            })
            
            await MedicalImage.create({
                patient: _id,
                doctor: info._id,
                imageURL: result.secure_url,
                title: title
            })
    
            return res.status(200).json({success: 'Image uploaded successfully'})
        })
    } catch (error) {
        res.status(500).json({error: error})
    }
})

export default router;

