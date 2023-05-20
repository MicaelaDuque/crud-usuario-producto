const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const User = db.User;

const userController = {
    register : (req, res) => {
        res.render('register');
    },

    processRegister: async(req, res) =>{
        try {
            let user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };
console.log (req.body);

            await db.User.create(user);
            res.redirect("/login")
            
        } catch (error) {
            console.log (error)
        }

    },

    login : (req, res) => {

        res.render('login');
    },


processLogin : (req, res) => {

    res.json({
        msj: "Respuesta del Process Login",
        data: req.body
    });
},
}


module.exports = userController;