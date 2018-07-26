'use strict';

const expect = require('chai').expect;

const dataService = require('../../../services/utilities/data.service');

describe('data.service', function () {

    context('dataExists', function() {
        it('should return true if data exists', () => {
            let testData = 'true';
            
            expect(dataService.dataExists(testData)).to.equal(true);
        });

        it('should return true if data does not exists', () => {
            expect(dataService.dataExists(null)).to.equal(false);
        });
    });
});

