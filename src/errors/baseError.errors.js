class BaseError extends Error {
    constructor(name, errorCode,statusCode, description) {
        super(description);

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.statusCode = statusCode;
        this.errorCode = errorCode;

        Error.captureStackTrace(this);
    }
}

module.exports = BaseError