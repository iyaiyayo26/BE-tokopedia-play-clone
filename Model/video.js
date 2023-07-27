const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    image_url: {
        required: true,
        type: String
    },
    video_url: {
        required: true,
        type: String

    },
    brand: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        }
    ]
    
})

module.exports = mongoose.model('Video', videoSchema);