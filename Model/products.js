const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    link: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String

    },
    price: {
        required: true,
        type: Number

    }
})

module.exports = mongoose.model('Products', productsSchema);