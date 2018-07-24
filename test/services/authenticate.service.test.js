'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');

const authenticateUtil = require('../../services/authenticate.service');

describe('authenticate.service', function () {

    beforeEach(() => {
        
    });

    afterEach(() => {
        
    });

    context('sessionCookieExist', function() {
        it('should return true if sessioncookie exists', () => {
            let sessionCookie = {
                something: 'SOMETHING'
            };

            expect(authenticateUtil.sessionCookieExist(sessionCookie)).to.be.true;
        });

        it('should return false if sessioncookie does not exist', () => {
            expect(authenticateUtil.sessionCookieExist()).to.be.false;
        });
    });
});

