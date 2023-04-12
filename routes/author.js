const router        = require('express').Router();
const controller    = require('../controller/author');


// getting all authors
router.get('/', controller.getAllAuthors);
// getting a single author
router.post('/', controller.addAuthor);
// adding an author
router.get('/:id', controller.getAuthor);
// edit an author
router.put('/:id', controller.editAuthor);
// delete an author
router.delete('/:id', controller.removeAuthor);


module.exports = router;