const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
});

module.exports = mongoose.model('Author', authorSchema);