const router = require('express').Router();

// getting all users
router.get('/', function (request, response) {
    response.send('Getting all user');
});

// getting a single user
router.get('/:id', function (request, response) {
    response.send('Getting a single user');
});

// adding an user
router.post('/', function (request, response) {
    response.send('Adding an user');
});

// edit an user
router.put('/:id', function (request, response) {
    response.send('Edit an user');
});

// delete an user
router.delete('/:id', function (request, response) {
    response.send('Delete an user');
});

module.exports = router;