const debug = require("debug")("app:error");

const handlers = {};

handlers.errorHandler = (error, req, res, next) => {
    //debug(error);
    //console.log(error);

    return res.status(error.statusCode).json(error);

};


module.exports = handlers;