const router        = require('express').Router();
const controller    = require('../controller/article')


// getting all articles
router.get('/', controller.getAllArticles);
// getting a single article
router.get('/:id', controller.getArticle);
// adding an article
router.post('/', controller.addArticle);
// edit an article
router.put('/:id', controller.editArticle);
// delete an article
router.delete('/:id', controller.removeArticle);


module.exports = router;