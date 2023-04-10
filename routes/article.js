const router = require('express').Router();

// getting all article
router.get('/', function (request, response) {
    response.send('Getting all article');
});

// getting a single article
router.get('/:id', function (request, response) {
    response.send('Getting a single article');
});

// adding an article
router.post('/', function (request, response) {
    response.send('Adding an article');
});

// edit an article
router.put('/:id', function (request, response) {
    response.send('Edit an article');
});

// delete an article
router.delete('/:id', function (request, response) {
    response.send('Delete an article');
});

module.exports = router;