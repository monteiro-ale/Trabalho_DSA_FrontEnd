const express = require('express');
const route = express.Router();

const userController = require('../controller/user_controller.js');


route.post('/validate/', userController.validateUser);

route.post('/insert_user/', userController.insert);

route.get('/list_user/', userController.listUser);

route.get('/:id', userController.searchById);

module.exports = route;