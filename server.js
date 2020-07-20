const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

mongoose.connect(
    'mongodb://localhost:27017/posts-api-node',
    { useNewUrlParser: true }
);

requireDir('./src/models');

app.use('/', require("./src/routes"))

app.listen(3001);