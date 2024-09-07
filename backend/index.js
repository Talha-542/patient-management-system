import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)

app.get('/', (req, res) => {
    res.send('Welcome to the Patient Management System API');
})

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
})


