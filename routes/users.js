var express = require('express');

var userData = require('../services/userData');

var router = express.Router();

router.get('/', function(req, res, next) {
  userData.getAllUsers((err, data) => {
    if (err) {
      console.log('Database Error', err);
      res.status(500).send('Database Error');
    }
    else {
      res.send(data);
    }
  });
});

router.get('/user/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);

  userData.getUserById(userId, (err, data) => {
    if (err) {
      console.log('Database Error', err);
      res.status(500).send('Database Error');
    }
    else {
      res.send(data);
    }
  });
});

module.exports = router;
