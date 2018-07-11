'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');

const db = require('../models');

const userData = require('../services/userData');

describe('userData', function () {
    let stubFindAll;

    beforeEach(() => {
        stubFindAll = sinon.stub(db.user, 'findAll');
    });

    afterEach(() => {
        stubFindAll.restore();
    });

    it('should pass in queryResult to callback when there is no error', (done) => {
        let queryResult = ['whatever1', 'whatever2'];

        stubFindAll.resolves(queryResult);

        userData.getAllUsers((...args) => {
            //assertion goes here, when the callback actually get called
            expect(queryResult).to.deep.equal(args[1]);

            done();
        });
    });

    it('should pass null to callback when encountered error', (done) => {
        stubFindAll.rejects('TypeError');

        userData.getAllUsers((...args) => {
            expect(args[0]).to.be.an('error');
            expect(args[1]).to.be.null;

            done();
        });
    });
});