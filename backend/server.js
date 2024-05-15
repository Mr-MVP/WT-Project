import express from 'express';
import pkg from 'mongoose';
const { connect, connection } = pkg;
import pkg1 from 'body-parser';
const { json } = pkg1;
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

connect(process.env.MONGO_URL);
const db = connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

import userRoutes from './routes/user.js';
import donationRoutes from './routes/donation.js';

app.use('/api/user', userRoutes);
app.use('/api/donation', donationRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});