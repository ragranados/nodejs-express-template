const userService = require("../services/index").userService;
const ApiResponse = require("../responses/ApiResponse");
const Errors = require('../errors');

const authController = {}

authController.register = async (req, res, next) => {
    try {
        const {username, email, password} = req.body;

        await userService.save(username, email, password);

        return res.status(200).json(ApiResponse(true, "Insertado creado con exito"));
    } catch (e) {
        next(e);
    }
}

authController.login = async (req, res, next) => {
    try {
        const {username} = req.body;

        const user = await userService.findByUsername(username);

        return res.status(200).json(ApiResponse(true, "Login succesfull", user));
    } catch (e) {
        next(e);
    }
}

module.exports = authController;