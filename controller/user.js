const User = require('../models/user');

exports.getAllUsers = (req, res) => {
    User.find()
            .then((users) => res.status(200).json(users))
            .catch((error) => res.status(400).json({
                message: error.message
            }))
};

exports.getUser = (req, res) => {
    User.findOne({ _id: req.params.id })
            .then((user) => {
                if (!user) {
                    res.status(400).json({
                        message: "Utilisateur inexistant !"
                    })
                } else {
                    res.status(200).json(user)
                }
            })
            .catch((error) => res.status(400).json({
                message: error.message
            }));
}

exports.addUser = (req, res) => {
    delete req.body._id;
    const user = new User({
        ...req.body
    });
    user
        .save()
        .then(() => res.status(201).json({ "message": "Utilisateur ajouté avec succès !" }))
        .catch((error) => res.status(400).json({
            message: error.message
        }))
}

exports.editUser = (req, res) => {
    User.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then((user) => res.status(200).json({
            message: "User modifié avec succès !"
        }))
        .catch((error) => res.status(400).json({
            message: error.message
        }))
}

exports.removeUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then((user) => {
            User.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({
                    message: "Utilisateur supprimé avec succès !"

                }))
                .catch((error) => res.status(400).json({
                    message: error.message
                }))
        })
        .catch((error) => res.status(400).json({
            message: error.message
        }))
}