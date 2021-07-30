const mongoose = require("mongoose");

//TODO: Add or remove user attributes as needed.
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

/**
 *
 * @returns {{email: mongoose.Schema.methods.email, username: mongoose.Schema.methods.username}}
 */

UserSchema.methods.toPublicDTO = function () {

    //TODO: Add or remove user attributes as need in both, const declaration and return statement.
    const {username, email} = this;

    return {
        username,
        email
    };
}

module.exports = mongoose.model("User", UserSchema)
