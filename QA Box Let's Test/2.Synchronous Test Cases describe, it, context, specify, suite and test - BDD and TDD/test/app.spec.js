const { add, sub } = require('../src/app');
const expect = require('chai').expect;
const { describe, it } = require('mocha');

// BDD
describe('Suite 1', () => {
    it('add(2, 3) should return 5', () => {
        // expect(add(2, 3)).to.be.equal(5);
        expect(add(2, 3)).to.be.equal(50);
    })
})

context('Suite 1.1', () => {
    specify('add(3, 3) should return 6', () => {
        expect(add(3, 3)).to.be.equal(6);
    })
})

// TDD
const { suite, test } = require('mocha');

suite('Suite 2', () => {
    test('add(3, 3) should return 6', () => {
        expect(add(3, 3)).to.be.equal(6);
    })
})