const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String
    }
}, { timestamps: true });


const User = mongoose.model('User', userSchema);


module.exports = User;