const mongoose = require("mongoose");

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
