const mongoose = require("mongoose");

//TODO: Add or remove user attributes as needed
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    }
}, {timestamps: {createdAt: 'created_at'}});

UserSchema.methods.toPublicDTO = function () {

    const {username, email} = this;

    return {
        username,
        email
    };
}

module.exports = mongoose.model("User", UserSchema)
