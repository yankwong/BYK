'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');

const db = require('../models');

const userData = require('../services/userData');

describe('userData', function () {

    it('should return an object when there is no error', (done) => {
        let queryResult = [];
        let stub = sinon.stub(db.user, 'findAll');
        stub.resolves(queryResult);
        
        // var callback = sinon.spy();

        let callback = sinon.spy();

        userData.getAllUsers(callback);

        // callback's first argument should deepEqual queryResult
        expect(queryResult).to.deep.equal(callback.args);

        done();

    });

    it('should return error when encountered error');
});