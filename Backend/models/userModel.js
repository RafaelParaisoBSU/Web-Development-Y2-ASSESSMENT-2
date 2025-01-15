import mongoose from "mongoose"; // Importing Mongoose for MongoDB interaction

// Defining the schema for the User model
const userSchema = new mongoose.Schema({
    name: {
        type: String, // Name is of type String
        required: true // Name is a required field
    },
    email: {
        type: String, // Email is of type String
        required: true, // Email is a required field
        unique: true // Email must be unique
    },
    password: {
        type: String, // Password is of type String
        required: true // Password is a required field
    },
});

// Exporting the User model based on the userSchema
export default mongoose.model("User", userSchema);