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

router.get('/:id', function(req, res, next) {
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

router.post('/register', function(req, res, next) {
  let userName = req.body.username;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let password = req.body.password;
  let email = req.body.email;

  // hash the password
  // store it in the DB
});

module.exports = router;
