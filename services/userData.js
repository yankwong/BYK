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

function getUserById(userID) {

}


module.exports = {
    getAllUsers : getAllUsers,
    getUserById : getUserById
}