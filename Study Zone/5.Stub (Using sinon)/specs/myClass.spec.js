const { expect } = require('chai');
const sinon = require('sinon');
const myClass = require("../src/myClass");

const myObj = new myClass();

describe.skip('Test suit', () => {
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

    it('mock the sayHello method', () => {
        const mock = sinon.mock(myObj);
        const expectation = mock.expects("sayHello");
        expectation.exactly(1);
        expectation.withArgs("hello world");
        myObj.callAnotherFn(10, 20)
        expectation.verify();
    });
});


describe('Test suit for stub', () => {
    it('Stub the add method', () => {
        const stub = sinon.stub(myObj, 'add');
        // stub.withArgs(10, 20).returns(100);
        // expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
        stub.withArgs(10, 20)
            .onFirstCall().returns(100)
            .onSecondCall().returns(200);
        expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
        expect(myObj.callAnotherFn(10, 20)).to.be.equal(200);
    });
});