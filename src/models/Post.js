const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String, 
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Post', PostSchema);