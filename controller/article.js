const Article = require('../models/article');

exports.getAllArticles = (req, res) => {
    Article.find()
            .then((articles) => res.status(200).json(articles))
            .catch((error) => res.status(400).json({
                message: error.message
            }))
};

exports.getArticle = (req, res) => {
    Article.findOne({ _id: req.params.id })
            .then((article) => {
                if (!article) {
                    res.status(400).json({
                        message: "Auteur inexistant !"
                    })
                } else {
                    res.status(200).json(article)
                }
            })
            .catch((error) => res.status(400).json({
                message: error.message
            }));
}

exports.addArticle = (req, res) => {
    delete req.body._id;
    const article = new Article({
        ...req.body
    });
    article
        .save()
        .then(() => res.status(201).json({ "message": "Article ajouté avec succès !" }))
        .catch((error) => res.status(400).json({
            message: error.message
        }))
}

exports.editArticle = (req, res) => {
    Article.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then((article) => res.status(200).json({
            message: "Auteur modifié avec succès !"
        }))
        .catch((error) => res.status(400).json({
            message: error.message
        }))
}

exports.removeArticle = (req, res) => {
    Article.findOne({ _id: req.params.id })
        .then((article) => {
            Article.deleteOne({ _id: req.params.id })
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