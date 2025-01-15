import express from 'express'; // Importing Express framework
import User from '../models/userModel.js'; // Importing User model
const router = express.Router(); // Creating a new router object

// Route for user registration
router.post('/', async (req, res) => {
    const { name, email, password } = req.body; // Destructuring request body to get user details
    try {
        let user = await User.findOne({ email }); // Checking if user already exists

        if (!user) {
            user = new User({ name, email, password }); // Creating a new user if not found
            await user.save(); // Saving the new user to the database
        }
        res.status(200).json({ user }); // Sending a successful response with user data

    } catch (error) {
        res.status(500).json({ message: error.message }); // Sending error response in case of failure
    }
});

// Route for user login
router.post('/login', async(req, res) => {
    const { email, password } = req.body; // Destructuring request body to get login details

    try {
        const user = await User.findOne({ email }); // Finding user by email
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' }); // Sending error if password doesn't match
        }
        res.json({ user }); // Sending successful response with user data
    } catch (error) {
        res.status(500).json({ message: error.message }); // Sending error response in case of failure
    }
});

export default router; // Exporting the router to be used in other parts of the application