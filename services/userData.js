'use strict';

var db = require('../models');


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

function registerUser(applicant) {
    // use service to hash password and format data

    // store the data to DB
    // db.user.create({})
}


module.exports = {
    getAllUsers : getAllUsers,
    getUserById : getUserById,
    registerUser: registerUser
}