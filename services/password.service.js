'use strict';

let bcrypt = require('bcrypt');

const saltRounds = 10;

function testBcrypt(callback) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash('1234', salt, (err, hash) =>{
            callback(err, hash);
        })
    });
}


function generateHashedPassword(password, callback) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) =>{
            callback(err, hash);
        })
    });
}

module.exports = {
    testBcrypt : testBcrypt,
    generateHashedPassword: generateHashedPassword
}