var express = require('express');
var router = express.Router();
userController = require('../controller/User');

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.post('/login', (req, res, next) => userController.login(req, res, next));


module.exports = router;
