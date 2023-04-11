const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    media: String,
    author: mongoose.Types.ObjectId
});

module.exports = mongoose.model("Article", articleSchema);