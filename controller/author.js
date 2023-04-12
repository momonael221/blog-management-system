const Author = require('../models/author');

exports.getAllAuthors = (req, res) => {
    Author.find()
            .then((authors) => res.status(200).json(authors))
            .catch((error) => res.status(400).json({
                message: error.message
            }))
};

exports.getAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
            .then((author) => {
                if (!author) {
                    res.status(400).json({
                        message: "Auteur inexistant !"
                    })
                } else {
                    res.status(200).json(author)
                }
            })
            .catch((error) => res.status(400).json({
                message: error.message
            }));
}

exports.addAuthor = (req, res) => {
    delete req.body._id;
    const author = new Author({
        ...req.body
    });
    author
        .save()
        .then(() => res.status(201).json({ "message": "Author ajouté avec succès !" }))
        .catch((error) => res.status(400).json({
            message: error.message
        }))
}

exports.editAuthor = (req, res) => {
    Author.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then((author) => res.status(200).json({
            message: "Auteur modifié avec succès !"
        }))
        .catch((error) => res.status(400).json({
            message: error.message
        }))
}

exports.removeAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then((author) => {
            Author.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({
                    message: "Auteur supprimé avec succès !"
                }))
                .catch((error) => res.status(400).json({
                    message: error.message
                }))
        })
        .catch((error) => res.status(400).json({
            message: error.message
        }))
}