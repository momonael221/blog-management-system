const Article = require('../models/article');

// récupérer tous les articles
exports.getAllArticles = (req, res) => {
    Article.find()
        .then((articles) => res.status(200).json(articles))
        .catch((error) => res.status(400).json(error))
}

// récupérer un article
exports.getArticle = (req, res) => {
    //
}

// ajouter un article
exports.addArticle = (req, res) => {
    delete req.body._id;
    const article = new Article({
        ...req.body
    });
    article.save()
    .then(() => res.status(201).json({ "message": "Article ajouté avec succès !" }))
    .catch((error) => res.status(400).json(error));
}

// modifier un article
exports.editArticle = (req, res) => {
    //
}

// supprimer un article
exports.removeArticle = (req, res) => {
    //
}