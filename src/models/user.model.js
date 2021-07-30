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
 * @returns Only wanted elements that are not defined in the array
 */

UserSchema.methods.toPublicDTO = function () {

    //TODO: Add unwanted attributes to the array
    const notWantedAttr = ["_id", "password"];
    const userPublicDTO = {}

    Object.keys(this._doc).forEach(function getPublicAttributes(element) {

        if (!notWantedAttr.includes(element)) {
            userPublicDTO[element] = this[element];
        }

    }, this);

    return userPublicDTO;
}

module.exports = mongoose.model("User", UserSchema)
