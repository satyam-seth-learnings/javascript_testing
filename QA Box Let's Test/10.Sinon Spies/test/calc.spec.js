const { myCalc } = require('../src/calc')
const chai = require('chai');
// const { describe, it } = require('mocha');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai')

chai.use(sinonChai);


describe.skip('Basic Tests', () => {
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

// describe('spy calculator method callback tests example - 1', () => {
//     it('myCalc - should call callback once', () => {
//         // Arrange
//         const spy = sinon.spy();
//         // Act
//         myCalc.myCalc(1, 2, spy);
//         // Assert
//         sinon.assert.calledOnce(spy); // sinon assertion
//         sinon.assert.calledWithExactly(spy, 1, 2);
//     });

//     it('myCalc - should call sum once with args 1 and 2', () => {
//         // Arrange
//         const spy = sinon.spy(myCalc, 'sum');
//         // Act
//         myCalc.sum(1, 2);
//         // Assert
//         sinon.assert.calledOnce(spy); // sinon assertion
//         sinon.assert.calledWith(spy, 1, 2);
//     });
// });

describe.skip('spy calculator method callback tests', () => {
    let spy;

    beforeEach(() => {
        // Arrange
        spy = sinon.spy(myCalc, 'sum');
    });

    afterEach(() => {
        spy.restore();
    });

    it('myCalc - should call sum once with args 1 and 2', () => {

        // Act
        myCalc.sum(1, 2);
        // Assert
        sinon.assert.calledOnce(spy); // sinon assertion
        sinon.assert.calledWith(spy, 1, 2);
    });

    it('myCalc - should call sum once with args 10 and 20', () => {
        // Act
        myCalc.sum(10, 20);
        // Assert
        sinon.assert.calledTwice(spy); // sinon assertion
        sinon.assert.calledWith(spy, 10, 20);
    });
});

describe('spy calculator property getter and setter tests', () => {
    let spy;

    beforeEach(() => {
        // Arrange
        spy = sinon.spy(myCalc, 'calc', ["get", "set"]);
    });

    afterEach(() => {
        spy.restore();
    });

    it('myCalc - getter and setter tests', () => {
        expect(myCalc.calc).to.equal('Casio');
        sinon.assert.calledOnce(spy.get);
        // Act
        myCalc.calc = 'Genuine';
        // Assert
        sinon.assert.calledWith(spy.set);
        expect(myCalc.calc).to.equal('Genuine');
    });
});