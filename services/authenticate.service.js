'use strict';

function sessionCookieExist(sessionToken) {
    return typeof sessionToken !== 'undefined' && sessionToken !== null;
}


module.exports = {
    sessionCookieExist : sessionCookieExist,
}