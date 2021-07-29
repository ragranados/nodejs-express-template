const NotFoundError = require('./notFoundError.errors');
const UsernameOrEmailNotAvailable = require('./usernameOrEmailNotAvailable');

const Errors = {}

Errors.NotFoundError = NotFoundError;
Errors.UsernameOrEmailNotAvailable = UsernameOrEmailNotAvailable;

module.exports = Errors;