const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        match: [/^\d{10}$/, 'Contact must be exactly 10 digits'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const users = new mongoose.model('user', UserSchema);

module.exports = users;