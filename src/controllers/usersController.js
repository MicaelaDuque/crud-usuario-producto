const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const userController = {
    register : (req, res) => {
        res.render('register');
    },

    login : (req, res) => {

        res.render('login');
    },
};

module.exports = userController;