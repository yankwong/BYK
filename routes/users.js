const express = require('express');
const router = express.Router();
const userData = require('../services/userData');
const passwordService = require('../services/password.service');
const authenticateService = require('../services/authenticate.service');

router.get('/', function(req, res, next) {
  userData.getAllUsers((err, data) => {
    if (!err) {
      res.send(data);
    }
    else {
      console.log('Database Error', err);
      res.sendStatus(500);
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
      res.sendStatus(500);
    }
  });
});

router.post('/register', function(req, res, next) {

  let applicant = {
    userName  : req.body.userName,
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
          res.json({
            id : data
          });
        }
        else {
          console.log('Database Error', err);
          res.sendStatus(500);
        }
      });
    }
    else {
      console.log('Password Hash Error', err);
      res.sendStatus(500);
    }
  });

});

router.post('/login', function(req, res, next) {
  let usernameOrEmail = req.usernameOrEmail;
  let password = req.password;

  userData.getUserByUsernameOrEmail(usernameOrEmail, (err, data) => {
    if (!err) {
      if (typeof data !== 'undefined' && data !== null) {
        passwordService.comparePassword(password, data.password, (err, data) => {
          if (!err) {
            // set session cookie
            req.session.user = data;
          }
          else {
            // wrong password
          }
        });
      }
      else {
        // no user found using login
      }
    }
    else {
      // get user error
    }
  });
      
  
});

module.exports = router;
