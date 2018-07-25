'use strict';

function logError(err, message = 'ERROR: ') {
    if (process.env.NODE_ENV !== 'production') {
        console.log(message, err);
    }    
}

module.exports = {
    logError: logError
}