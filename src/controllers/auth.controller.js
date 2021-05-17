const userService = require("../services/index").userService;
const ApiResponse = require("../responses/ApiResponse");

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

module.exports = authController;