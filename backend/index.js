import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import AdminRoutes from './routes/AdminRoutes.js'
import DoctorRoutes from './routes/DoctorRoutes.js'
import AuthRoutes from './routes/AuthRoutes.js'

dotenv.config();

const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)

app.get('/api', (req, res) => {
    res.send('Welcome to the Patient Management System API');
})

app.use('/api/admin', AdminRoutes);
app.use('/api/doctor', DoctorRoutes);
app.use('/api/auth', AuthRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
})


