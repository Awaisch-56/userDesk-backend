// Route logic

const User = require('../models/user');

const orderUserFields = (user) => ({
    _id: user._id,
    name: user.name,
    email: user.email,
    age: user.age,
    phone: user.phone,
    gender: user.gender,
    address: user.address,
    isActive: user.isActive,
    createdAt: user.createdAt,
});

// Create user
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(orderUserFields(user));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        const orderedUsers = users.map(orderUserFields);
        res.json(orderedUsers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(orderUserFields(user));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(orderUserFields(user)); 
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
