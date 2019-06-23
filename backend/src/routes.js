const express = require('express');
const Postcontroler = require('./controllers/PostController')

const routes = new express.Router();

routes.post('/posts', Postcontroler.store);

module.exports = routes;