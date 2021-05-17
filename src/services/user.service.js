const ServiceResponse = require("../responses/ServiceResponse");
const userModel = require("../models/user.model");

const service = {};

service.save = async (username, email, password) => {
    const newUser = new userModel({
        username,
        email,
        password
    });

    await newUser.save();

    return new ServiceResponse(true, newUser);
}

module.exports = service;