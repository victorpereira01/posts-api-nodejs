const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');

routes.get('/users', UserController.findAll);
routes.get('/users/:id', UserController.findOne);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/posts/:id', PostController.findOne);
routes.post('/posts', PostController.create);

module.exports = routes;