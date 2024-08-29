import dotenv from 'dotenv';
import express from 'express';

/** Routes */
import userRoutes from './routes/user.route';

dotenv.config();

const app = express();

app.use(express.json()); // Ensure JSON body parsing if needed

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});
