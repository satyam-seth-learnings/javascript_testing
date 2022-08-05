const { expect } = require('chai');
const myClass = require("../src/myClass");

const myObj = new myClass();

describe('Test Suit', () => {
    it('Test the add method', () => {
        expect(myObj.add(1, 2)).to.be.equal(3);
    });
});