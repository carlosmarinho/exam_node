var express = require('express');
var router = express.Router();
userController = require('../controller/User');

router.get('/', (req, res, next) => UserController.viewAll(req, res, next) );
router.get('/:id?', (req, res, next) => UserController.view(req, res, next) );
router.post('/', (req, res, next) => UserController.add(req, res, next));
router.delete('/:id', (req, res, next) => UserController.remove(req, res, next));
router.put('/:id', (req, res, next) => UserController.updateUser(req, res, next));

router.post('/login', (req, res, next) => userController.login(req, res, next));


module.exports = router;
