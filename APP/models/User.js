const mongoose = require('mongoose')
const Jdate = require("./Date")

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        default: "Undefined"
    },
    Password: {
        type: String,
        required: true,
    },
    RSA: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Jdate.Update(),
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User