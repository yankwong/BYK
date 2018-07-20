'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');

const sessionUtil = require('../../services/session.service');

describe('session.service', function () {

    beforeEach(() => {
        
    });

    afterEach(() => {
        
    });

    context('sessionCookieExist', function() {
        it('should return true if sessioncookie exists', () => {
            let sessionCookie = {
                something: 'SOMETHING'
            };

            expect(sessionUtil.sessionCookieExist(sessionCookie)).to.be.true;
        });

        it('should return false if sessioncookie does not exist', () => {
            expect(sessionUtil.sessionCookieExist()).to.be.false;
        });
    });
});

