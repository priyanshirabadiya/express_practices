const mongoose = require('mongoose');

let cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersmanupulations'
    },
    product: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'productsdata'
    },
    quentity: {
        type: Number
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
{
    versionKey : false,
    timestamps : true
})

module.exports = mongoose.model("cartsdata", cartSchema);


