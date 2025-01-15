import express from 'express'; // Importing Express framework
import mongoose from 'mongoose'; // Importing Mongoose for MongoDB interaction
import dotenv from 'dotenv'; // Importing dotenv for environment variable management
import cors from 'cors'; // Importing CORS for cross-origin resource sharing
import { fileURLToPath } from 'url'; // Importing utility to convert URL to file path
import { dirname, join } from 'path'; // Importing path utilities
import userRoutes from './routes/userRoutes.js'; // Importing user routes

const app = express(); // Initializing Express app
const __filename = fileURLToPath(import.meta.url); // Getting the current file name
const __dirname = dirname(__filename); // Getting the directory name of the current module

dotenv.config(); // Loading environment variables from .env file

// Middleware
app.use(cors()); // Enabling CORS
app.use(express.static(join(__dirname, '..', 'public'))); // Serving static files from the public directory
app.use(express.json()); // Parsing JSON request bodies
app.use('/api/user', userRoutes); // Using user routes for /api/user endpoint

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI); // Connecting to MongoDB using URI from environment variables
        console.log('MongoDB Connected...'); // Logging successful connection
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message); // Logging connection error
    }
};

connectDB(); // Initiating database connection

const PORT = process.env.PORT || 4000; // Setting the server port from environment variables or default to 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Logging server start
});