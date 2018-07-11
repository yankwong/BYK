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
            authorId: userId
        }
      })
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      });
}


module.exports = {
    getAllUsers : getAllUsers,
    getUserById : getUserById
}