const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/posts-api-node',
    { useNewUrlParser: true }
);

app.get('/users', (req, res) => {
    res.send("SALVE");
});

app.listen(3001);