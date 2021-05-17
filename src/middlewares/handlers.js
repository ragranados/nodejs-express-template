//const debug = require("debug")("app:error");

const handlers = {};

handlers.errorHandler = (error, req, res, next) => {
    //debug(error);

    if (error.detail) {
        return res.status(400).json(error.detail);
    }

    return res.status(400).json(error.message);

};


module.exports = handlers;