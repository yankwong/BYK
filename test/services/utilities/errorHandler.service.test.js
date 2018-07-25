'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

const errorHandler = require('../../../services/utilities/errorHandler.service');

chai.should();
chai.use(sinonChai);

describe('authenticate.service', function () {
    let consoleLogSpy;
    let processEnv;

    beforeEach(() => {
        processEnv = process.env.NODE_ENV;
        
        consoleLogSpy = sinon.spy(console, 'log');

    });

    afterEach(() => {
        process.env.NODE_ENV = processEnv;

        consoleLogSpy.restore();
    });

    context('logError', function() {
        it('should log error if current env is NOT production', () => {
            process.env.NODE_ENV = 'development';

            errorHandler.logError(new Error('TypeError'));

            expect(consoleLogSpy).to.be.calledOnce;
        });

        it('should NOT log error if current env is production', () => {
            process.env.NODE_ENV = 'production';

            errorHandler.logError(new Error('TypeError'));

            expect(consoleLogSpy).to.not.be.called;
        });
    });
});

