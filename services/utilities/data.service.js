'use strict';

function dataExists(data) {
    return typeof data !== 'undefined' && data !== null;
}

module.exports = {
    dataExists : dataExists
}