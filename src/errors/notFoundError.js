const BaseError = require('./baseError');
const httpCodes = require('../httpStatusCodes');

class NotFoundError extends BaseError {
    constructor(name, errorCode = "01",statusCode = httpCodes.NOT_FOUND, description = 'Not Found.') {
        super(name, errorCode ,statusCode, description);
    }
}

module.exports = NotFoundError;
