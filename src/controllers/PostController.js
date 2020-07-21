const mongoose = require('mongoose');

const Post = mongoose.model('Post');

module.exports = {
    async findOne(req, res) {
        const post = await Post.findById(req.params.id);
        return res.json(post);
    },

    async create(req, res) {
        const post = await Post.create(req.body);
        return res.json(post);
    }
}