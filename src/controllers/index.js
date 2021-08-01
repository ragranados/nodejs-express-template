const authController = require("./auth.controller");
const userController = require("./user.controller");

const controllers = {};

controllers.authController = authController;
controllers.userController = userController;

module.exports = controllers;