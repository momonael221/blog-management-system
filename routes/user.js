const router        = require('express').Router();
const controller    = require('../controller/user');


// getting all users
router.get('/', controller.getAllUsers);
// getting a single user
router.post('/', controller.addUser);
// adding an user
router.get('/:id', controller.getUser);
// edit an user
router.put('/:id', controller.editUser);
// delete an user
router.delete('/:id', controller.removeUser);


module.exports = router;