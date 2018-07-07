var express = require('express');

var userData = require('../services/userData');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  userData.getAllUsers((err, data) => {
    if (err) {
      res.status(500).send('Database Error');
    }
    else {
      res.send(data);
    }
  });

});

router.get('/user/:id', function(req, res, next) {

});

module.exports = router;
