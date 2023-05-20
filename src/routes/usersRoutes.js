const express = require('express');
const users = express.Router();
const usersController = require('../controllers/usersController');

users.get('/register', usersController.register);
users.get('/login', usersController.login);


module.exports = users;