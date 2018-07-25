'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

const errorHandler = require('../../../services/utilities/errorHandler.service');

chai.should();
chai.use(sinonChai);

describe('authenticate.service', function () {
    let consoleLogStub;
    let processEnv;

    beforeEach(() => {
        processEnv = process.env.NODE_ENV;
        // consoleLogStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
        process.env.NODE_ENV = processEnv;
        // consoleLogStub.restore();
    });

    context('logError', function() {
        it('should log error if current env is NOT production', () => {
            process.env.NODE_ENV = 'development';

            errorHandler.logError(new Error('TypeError'));

            // consoleLogStub.should.have.been.called;
        });

        it('should return false if sessioncookie does not exist');
    });
});

