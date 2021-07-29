const ServiceResponse = require("../responses/ServiceResponse");
const userModel = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Errors = require('../errors');

const service = {};

service.save = async (username, email, password) => {
    //const session = await mongoose.startSession();

    try {
        //await session.startTransaction();

        if (!await service.isEmailAvailable()) throw new Errors.UsernameOrEmailNotAvailable(`Email ${email} already taken.`);

        if (!await service.isUsernameAvailable()) throw new Errors.UsernameOrEmailNotAvailable(`Username ${username} already taken.`);

        const encrypted = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            username,
            email,
            password: encrypted
        });

        const inserted = await newUser.save({session: session});

        if (!inserted) {
            throw new Error("No insertado");
        }

        //await session.commitTransaction();

        return ServiceResponse(true, newUser);
    } catch (e) {
        //await session.abortTransaction();
        throw e;
    } finally {
        //await session.endSession();
    }
}

service.findByUsername = async (username) => {

    const user = await userModel.findOne({username: username});

    if (user == null) {
        //throw NotFoundError(`Email ${email} not found.`);
        throw new Errors.NotFoundError(`User ${username} not found.`);
    }

    return user;

}

service.findByEmail = async (email) => {

    const user = await userModel.findOne({email: email});

    if (user == null) {
        //throw NotFoundError(`Email ${email} not found.`);
        throw new Errors.NotFoundError(`User with email ${email} not found.`);
    }

    return user;

}

service.isEmailAvailable = async (email) => {
    const user = await userModel.findOne({email: email});
    console.log(`user xd: ${user}`)

    return user == null
}

service.isUsernameAvailable = async (username) => {
    const user = await userModel.find({username: username});
    console.log(`user xd: ${user}`)

    return user == null
}

module.exports = service;