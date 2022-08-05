const { expect } = require('chai');
const sinon = require('sinon');
const myClass = require("../src/myClass");

const myObj = new myClass();

describe('Test Suit', () => {
    it('Test the add method', () => {
        expect(myObj.add(1, 2)).to.be.equal(3);
    });

    it('spy the add method', () => {
        const spy = sinon.spy(myObj, 'add');
        const arg1 = 10, arg2 = 20;
        myObj.callAnotherFn(arg1, arg2);

        // sinon.assert.calledTwice(spy);
        // sinon.assert.calledOnce(spy);

        // expect(spy.calledTwice).to.be.true;
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;
    });

    it('spy the callback', () => {
        const callback = sinon.spy();
        myObj.callCallback(callback);

        // expect(callback.calledOnce).to.be.false;
        expect(callback.calledOnce).to.be.true;
    });
});