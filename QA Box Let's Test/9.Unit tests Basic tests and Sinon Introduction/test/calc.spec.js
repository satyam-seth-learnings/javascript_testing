const { myCalc } = require('../src/calc')
const { expect } = require('chai');
// const { describe, it } = require('mocha');

describe('Basic Tests', () => {
    it('sum - should return correct output with positive values', () => {
        // Arrange

        // Act
        const result = myCalc.sum(2, 3);
        // Assert
        expect(result).to.equal(5); // chai
    });
    it('sum - should return correct output with negative values', () => {
        // Arrange

        // Act
        const result = myCalc.sum(-2, -3);
        // Assert
        expect(result).to.equal(-5); // chai
    });
    it('div - should return correct values', () => {
        const result = myCalc.div(4, 2);
        expect(result).to.equal(2);
    });
    it('div - should return Infinity', () => {
        const result = myCalc.div(2, 0);
        expect(result).to.equal(Infinity);
    });
})