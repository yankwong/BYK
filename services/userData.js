'use strict';

const db = require('../models');

function getAllUsers(callback) {
    db.user.findAll({
        attributes: [
          'id',
          'firstName',
          'lastName'
        ]
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
        attributes: [
          'id',
          'firstName',
          'lastName',
          'userName',
          'email'
        ],
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
    registerUser: registerUser
}