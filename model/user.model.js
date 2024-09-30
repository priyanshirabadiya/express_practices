const mongoose = require('mongoose');

const userShceme = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        require: true,
        qnique: true
    },
    password: String,
    isDelete: {
        type: Boolean,
        default: false
    }
},
    {
        versionKey: false,
        timestamps: true
    })

module.exports = mongoose.model("usersmanupulations", userShceme);
