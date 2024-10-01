const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String
    },
    price: {
        type: Number
    },
    offers: {
        type: Boolean,
        default: false
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
    {
        versionKey: false,
        timestamp: true
    });

module.exports = mongoose.model('productsdata', productSchema);