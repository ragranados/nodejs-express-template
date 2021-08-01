const userService = require("../services/index").userService;
const ApiResponse = require("../responses/ApiResponse");
const Errors = require('../errors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DTO = require('../dto');

const userController = {}

userController.getMyProfile = (req, res, next) => {
    try {
        //const {} = req.body;
        //console.log(req.headers);

        return res.status(200).json(true);
    } catch (e) {
        throw e;
    }
}

module.exports = userController;