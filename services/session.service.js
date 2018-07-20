'use strict';

function sessionCookieExist(sessionToken) {
    return typeof sessionToken !== undefined && sessionToken !== null;
}

// need set cookie?


module.exports = {
    sessionCookieExist : sessionCookieExist
}