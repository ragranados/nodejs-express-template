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

module.exports = mongoose.model("User", UserSchema)
