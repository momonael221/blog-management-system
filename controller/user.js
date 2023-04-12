const User = require('../models/user');

exports.getAllUsers = (req, res) => {
    User.find()
            .then((users) => res.status(200).json(users))
            .catch((error) => res.status(400).json(error))
};

exports.getUser = (req, res) => {
    User.findOne({ _id: req.params.id })
            .then((user) => res.status(200).json(user))
            .catch((error) => res.status(400).json(error));
}

exports.addUser = (req, res) => {
    delete req.body._id;
    const user = new User({
        ...req.body
    });
    user
        .save()
        .then(() => res.status(201).json({ "message": "User ajouté avec succès !" }))
        .catch((error) => res.status(400).json(error))
}

exports.editUser = (req, res) => {
    //
}
exports.removeUser = (req, res) => {
    //
}