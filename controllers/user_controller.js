const User = require('../models/user_model');

async function handleGetUserbyID(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            return res.json(user);
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}

async function handleGetAllUsers(req, res) {
    try {
        const allDBusers = await User.find({});
        return res.json(allDBusers);
    } catch (error) {
        console.error('Error fetching all users:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}

async function handleCreateNewUser(req, res) {
    try {
        const body = req.body;
        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender
        });
        console.log(result);
        return res.status(201).json({ msg: "Success", user: result });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(400).json({ msg: "Error", error: error.message });
    }
}

async function handleUpdateUsers(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (updatedUser) {
            return res.json({ status: "Success", user: updatedUser });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(400).json({ msg: "Error", error: error.message });
    }
}

async function handleDeleteUsers(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (user) {
            return res.json({ status: "Success" });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = {
    handleGetUserbyID,
    handleGetAllUsers,
    handleUpdateUsers,
    handleDeleteUsers,
    handleCreateNewUser,
};
