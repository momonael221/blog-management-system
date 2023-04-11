const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, lowercase: true, required: true },
    password: { type: String, required: true },
    profil: { type: String },
    phone: { type: String },
    address: { type: String },
    gender: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
