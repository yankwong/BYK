'use strict';

function buildDBFake() {
    let dataQueue = [];

    function executeDbQuery(params, callback) {
        let data = dequeueQueryData();
        callback(data.err, data.data);
    }

    function enqueueQueryData(data) {
        dataQueue.push(data);
    }

    function dequeueQueryData(data) {
        return dataQueue.shift();
    }

    return {
        dequeueQueryData: dequeueQueryData,
        enqueueQueryData: enqueueQueryData,
        executeDbQuery: executeDbQuery
    }
}

module.exports = {
    buildDBFake: buildDBFake
}