var express = require('express');
var router = express.Router();

var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/:id', function(req, res, next) {

});

module.exports = router;
