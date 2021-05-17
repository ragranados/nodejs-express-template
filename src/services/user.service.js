const ServiceResponse = require("../responses/ServiceResponse");
const userModel = require("../models/user.model");
const mongoose = require("mongoose");

const service = {};

service.save = async (username, email, password) => {
    const session = await mongoose.startSession();

    try {
        const newUser = new userModel({
            username,
            email,
            password
        });

        await session.startTransaction();

        const inserted = await newUser.save({session: session});

        if (!inserted) {
            throw new Error("No insertado");
        }

        await session.commitTransaction();

        return new ServiceResponse(true, newUser);
    } catch (e) {
        await session.abortTransaction();
        throw e;
    } finally {
        await session.endSession();
    }
}

module.exports = service;