const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: {
            street: String,
            city: String,
            state: String,
            zip: String
        },
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const userModel = mongoose.model('users', userSchema); // make collection 'users'
module.exports = userModel;