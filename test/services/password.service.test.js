'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');

const db = require('../../models');

const passwordUtil = require('../../services/password.service');

describe('password.service', function () {

    beforeEach(() => {
    });

    afterEach(() => {
    });

    context('testBcrypt', function() {

        it('should return hash of password', (done) => {
            passwordUtil.testBcrypt((err, hash) => {
                expect(hash).to.not.be.null;
                done();
            });
        });
        
    });

    context('generateHashedPassword', function() {
        it('should return a hash if encounter no error');
        it('should not return a hash if encountered error');
    });
});

