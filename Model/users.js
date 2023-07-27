const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    comment: {
        type: String,
        required: true
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Users", usersSchema);