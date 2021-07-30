class BaseError extends Error {
    constructor(name, errorCode, statusCode, save, description) {
        super(description);

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.save = true;

        Error.captureStackTrace(this);
    }
}

module.exports = BaseError