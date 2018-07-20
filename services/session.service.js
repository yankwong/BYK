'use strict';

function sessionCookieExist(sessionToken) {
    console.log('adsfasdf', sessionToken);
    return typeof sessionToken !== 'undefined' && sessionToken !== null;
}

// need set cookie?


module.exports = {
    sessionCookieExist : sessionCookieExist
}