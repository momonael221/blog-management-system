const Author = require('../models/author');

exports.getAllAuthors = (req, res) => {
    Author.find()
            .then((authors) => res.status(200).json(authors))
            .catch((error) => res.status(400).json(error))
};

exports.getAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
            .then((author) => res.status(200).json(author))
            .catch((error) => res.status(400).json(error));
}

exports.addAuthor = (req, res) => {
    delete req.body._id;
    const author = new Author({
        ...req.body
    });
    author
        .save()
        .then(() => res.status(201).json({ "message": "Author ajouté avec succès !" }))
        .catch((error) => res.status(400).json(error))
}

exports.editAuthor = (req, res) => {
    //
}
exports.removeAuthor = (req, res) => {
    //
}