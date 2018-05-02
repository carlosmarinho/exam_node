var express = require('express');
var router = express.Router();
usersController = require('../controller/Users');
productController = require('../controller/Product');


router.get('/', (req, res, next) => {usersController.viewAll(req, res, next)} );
router.get('/:id?', (req, res, next) => usersController.view(req, res, next) );
router.post('/', (req, res, next) => usersController.add(req, res, next));
router.delete('/:id', (req, res, next) => usersController.remove(req, res, next));
router.put('/:id', (req, res, next) => usersController.updateUser(req, res, next));

router.post('/login', (req, res, next) => usersController.login(req, res, next));


module.exports = router;
