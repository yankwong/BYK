const express = require('express');
const router = express.Router();
const userData = require('../services/userData');
const passwordService = require('../services/password.service');

router.get('/', function(req, res, next) {
  userData.getAllUsers((err, data) => {
    if (!err) {
      res.send(data);
    }
    else {
      console.log('Database Error', err);
      res.status(500).send('Database Error');
    }
  });
});

router.get('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);

  userData.getUserById(userId, (err, data) => {
    if (!err) {
      res.send(data);
    }
    else {
      console.log('Database Error', err);
      res.status(500).send('Database Error');
    }
  });
});

router.post('/register', function(req, res, next) {

  let applicant = {
    userName  : req.body.username,
    firstName : req.body.firstName,
    lastName  : req.body.lastName,
    password  : req.body.password,
    email     : req.body.email
  }

  passwordService.generateHashedPassword(applicant.password, (err, hash) => {
    if (!err) {
      applicant.password = hash;
      userData.registerUser(applicant, (err, data) => {
        if (!err) {
          res.send(data);
        }
        else {
          console.log('Database Error', err);
          res.status(500).send('Database Error');
        }
      });
    }
    else {
      console.log('Password Hash Error', err);
      res.status(500).send('Database Error');
    }
  });

});

module.exports = router;
