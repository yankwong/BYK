'use strict';

const expect = require('chai').expect;
let sinon = require('sinon');
let bcrypt = require('bcrypt');

const passwordUtil = require('../../services/password.service');

describe('password.service', function () {
    let bcryptGenSalltStub;
    let bcryptHashStub;
    let bcryptCompareStub;

    beforeEach(() => {
        bcryptGenSalltStub = sinon.stub(bcrypt, 'genSalt');
        bcryptHashStub = sinon.stub(bcrypt, 'hash');
        bcryptCompareStub = sinon.stub(bcrypt, 'compare');
    });

    afterEach(() => {
        bcryptGenSalltStub.restore();
        bcryptHashStub.restore();
        bcryptCompareStub.restore();
    });

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

    context('verifyPassword', function() {
        it('should return boolean "true" if password and hash matches', (done)=> {
            const plainTxtPassword = 'IT IS A PASSWORD';
            const correctHash = 'THISISALLGOOD';

            bcryptCompareStub.yields(null, true);

            passwordUtil.verifyPassword(plainTxtPassword, correctHash, (...args) => {
                expect(args[0]).to.be.null;
                expect(args[1]).to.equal(true);
                done();
            });
        });

        it('should return boolean "false" if password and hash does not matches', (done) => {
            const plainTxtPassword = 'IT IS A PASSWORD';
            const wrongHash = 'THISISALLWRONG';

            bcryptCompareStub.yields(null, false);

            passwordUtil.verifyPassword(plainTxtPassword, wrongHash, (...args) => {
                expect(args[0]).to.be.null;
                expect(args[1]).to.equal(false);
                done();
            });
        });

        it('should return an error if encountered error during comparing', (done) => {
            const plainTxtPassword = 'IT IS A PASSWORD';
            const correctHash = 'THISISALLGOOD';

            bcryptCompareStub.yields(new Error('Hash Error'), null);

            passwordUtil.verifyPassword(plainTxtPassword, correctHash, (...args) => {
                expect(args[0]).to.be.an('error');
                expect(args[1]).to.be.null;
                done();
            });
        });
    });
});