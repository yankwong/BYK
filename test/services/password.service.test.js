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
        bcryptGenSalltStub = sinon.stub(bcrypt, 'genSalt');
        bcryptHashStub = sinon.stub(bcrypt, 'hash');
    });

    afterEach(() => {
        bcryptGenSalltStub.restore();
        bcryptHashStub.restore();
    });

    // context('testBcrypt', function() {

    //     it('should return hash of password', (done) => {
    //         passwordUtil.testBcrypt((err, hash) => {
    //             expect(hash).to.not.be.null;
    //             done();
    //         });
    //     });
        
    // });

    context('generateHashedPassword', function() {
        it('should return a hash if encounter no error', (done) => {
            const salt = 'TEST_SALT';
            const hash = 'TEST_HASH';
            const password = 'TEST_PASSWORD';

            bcryptGenSalltStub.yields(null, salt);
            bcryptHashStub.yields(null, hash);

            passwordUtil.generateHashedPassword(password, (...args) => {
                expect(args[1]).to.equal(hash);
                expect(args[0]).to.be.null;
                done();
            });
        });

        it('should pass in an error if encountered error', (done) => {
            const salt = 'TEST_SALT';
            const password = 'TEST_PASSWORD';

            bcryptGenSalltStub.yields(null, salt);
            bcryptHashStub.yields(new Error('Hash Error'), null);

            passwordUtil.generateHashedPassword(password, (...args) => {
                expect(args[0]).to.be.an('error');
                expect(args[1]).to.be.null;
                done();
            });
        });
    });
});

