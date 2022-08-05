const { myCalc } = require('../src/calc');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('Mock Cases', () => {
    it('Mock printHi method', () => {
        // Arrange
        let mock = sinon.mock(myCalc);
        let expectation = mock.expects('printHi');
        expectation.exactly(1);
        expectation.withArgs('Qa Box');
        // Act
        myCalc.sum(2, 3);
        // Assert
        expectation.verify();
    })
})