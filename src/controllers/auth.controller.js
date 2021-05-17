const services = require("../services/index");

const authController = {}

 authController.register = (req, res, next) => {
    try{
        console.log("si jala");

        return res.status(200).json("si jala");
    }catch(e){
        console.error(e);
    }
}

module.exports = authController;