const express = require('express');
const router = express.Router();
const userData = require('../services/userData');
const passwordService = require('../services/password.service');
const dataUtilities = require('../services/utilities/data.service');

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
  let usernameOrEmail = req.body.usernameOrEmail;
  let password = req.body.password;

  userData.getUserByUsernameOrEmail(usernameOrEmail, (err, data) => {
    if (!err) {
      if (dataUtilities.dataExists(data)) {
        passwordService.verifyPassword(password, data[0].password, (err, data) => {
          if (!err) {
            if (data === true) {
              // set session cookie
              req.session.user = data;
              res.sendStatus(200);
            }
            else {
              console.log('login error: INCORRECT PASSWORD');
              res.sendStatus(403);  
            }
          }
          else {
            console.log('login error: VERIFY PASSWORD ERROR', err);
            res.sendStatus(500);
          }
        });
      }
      else {
        console.log('login error: NO USER FOUND', data);
        res.sendStatus(404);
      }
    }
    else {
      console.log('login error: GET USER ERROR', err);
      res.sendStatus(500);
    }
  });
});

router.post('/logout', function(req, res, next) {
  req.session.destroy((err) => {
    if (err) {
      res.sendStatus(500);
    }
    else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
