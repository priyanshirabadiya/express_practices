let mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        qnique: true
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    address: {
        line1: String,
        line2: String,
        pincode: Number
    },
    isDelete:
    {
        type: Boolean,
        default: false
    }
},
    {
        versionKey: false,
        timestamps: true,
    })

module.exports = mongoose.model("Usersmanupulation", userSchema);