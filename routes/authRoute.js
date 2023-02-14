const express = require('express');
const router = express.Router();

// import controllers
const Users = require('./../controller/userController');

router.route('/').get(Users.getUsers);
router.post('/register', Users.createUser);

module.exports = router;
