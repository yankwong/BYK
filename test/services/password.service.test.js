'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');
let bcrypt = require('bcrypt');

const db = require('../../models');

const passwordUtil = require('../../services/password.service');

describe('password.service', function () {
    let bcryptGenSalltStub;
    let bcryptHashStub;

    beforeEach(() => {
        stubFindAll = sinon.stub(bcrypt, 'genSalt');
        stubFindAll = sinon.stub(bcrypt, 'hash');
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
        it('should return a hash if encounter no error', () => {
            passwordUtil.generateHashedPassword();
        });

        it('should not return a hash if encountered error');
    });
});

