'use strict';

const db = require('../models');

const attributeArray = [
  'id',
  'firstName',
  'lastName',
  'userName',
  'email'
];


function getAllUsers(callback) {
    db.user.findAll({
      attributes: attributeArray
    })
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      });
}

function getUserById(userId, callback) {
    db.user.findAll({
        limit: 1,
        attributes: attributeArray,
        where: {
            id: userId
        }
      })
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      });
}

function getUserByUsernameOrEmail(login, callback) {
  db.user.findAll({
    limit: 1,
    where: {
      $or : [{
        email: login
      }, {
        userName: login
      }]
    }
  })
  .then((data) => {
    callback(null, data);
  })
  .catch((err) => {
    callback(err, null);
  });
}

function registerUser(applicant, callback) {
  db.user.create(applicant)
  .then((newUser) => {
    callback(null, newUser.get('id'));
  })
  .catch((err) => {
    callback(err, null);
  })
}


module.exports = {
    getAllUsers : getAllUsers,
    getUserById : getUserById,
    registerUser: registerUser,
    getUserByUsernameOrEmail : getUserByUsernameOrEmail
}