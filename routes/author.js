const router = require('express').Router();


// getting all authors
router.get('/', function (request, response) {
    response.send('Getting all author');
});

// getting a single author
router.get('/:id', function (request, response) {
    response.send('Getting a single author');
});

// adding an author
router.post('/', function (request, response) {
    response.send('Adding an author');
});

// edit an author
router.put('/:id', function (request, response) {
    response.send('Edit an author');
});

// delete an author
router.delete('/:id', function (request, response) {
    response.send('Delete an author');
});


//Pour rendre les routes visibles dans d'autres fichiers
//il faudra les exporter
module.exports = router;