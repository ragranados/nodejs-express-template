const userService = require("./user.service");
const errorService = require("./error.service");

const Services = {};

Services.userService = userService;
Services.errorService = errorService;

module.exports = Services;