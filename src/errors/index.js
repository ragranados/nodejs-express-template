const NotFoundError = require('./notFoundError.errors');
const UsernameOrEmailNotAvailable = require('./usernameOrEmailNotAvailable');
const BadCredentialsError = require('./badCredencialsError.errors');

const Errors = {}

Errors.NotFoundError = NotFoundError;
Errors.UsernameOrEmailNotAvailable = UsernameOrEmailNotAvailable;
Errors.BadCredentialsError = BadCredentialsError;

module.exports = Errors;