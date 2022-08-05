const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const myClass = require("../src/myClass");
const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');

chai.use(chaiAsPromised);

const myObj = new myClass();

describe('Test suit', () => {
    after(() => { });
    before(() => { });
    afterEach(() => { });
    beforeEach(() => {
        sinon.restore();
    });

    it('Test the add method', () => {
        expect(myObj.add(1, 2)).to.be.equal(3);
    });

    it('spy the add method', () => {
        const spy = sinon.spy(myObj, 'add');
        const arg1 = 10, arg2 = 20;
        myObj.callAnotherFn(arg1, arg2);

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;

        // spy.restore();
    });

    it('copy spy the add method', () => {
        const spy = sinon.spy(myObj, 'add');
        const arg1 = 10, arg2 = 20;
        myObj.callAnotherFn(arg1, arg2);

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;
    });

    it.skip('spy the callback', () => {
        const callback = sinon.spy();
        myObj.callCallback(callback);

        // expect(callback.calledOnce).to.be.false;
        expect(callback.calledOnce).to.be.true;
    });

    it.skip('mock the sayHello method', () => {
        const mock = sinon.mock(myObj);
        const expectation = mock.expects("sayHello");
        expectation.exactly(1);
        expectation.withArgs("hello world");
        myObj.callAnotherFn(10, 20)
        expectation.verify();
    });
});


describe.skip('Test suit for stub', () => {
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

describe.skip('Test the promise', () => {
    it('Promise test case', function (done) {
        // this.timeout(5000);
        this.timeout(0);

        myObj.testPromise().then((result) => {
            expect(result).to.be.equal(6);
            done();
        })
    });

    it('Promise test case using chai as promised', function () {
        this.timeout(0);
        return expect(myObj.testPromise()).to.eventually.equal(6);
    });
});

describe.skip('XHR test suit', () => {
    it('Mock and stub xhr call', function (done) {
        this.timeout(0);
        const scope = nock('https://jsonplaceholder.typicode.com')
            .post('/posts')
            .reply(200, { id: 123 });

        myObj.xhrFn().then((result) => {
            // console.log(result);
            // expect(result).to.be.equal({ id: 1234 });
            expect(result).to.be.equal({ id: 123 });
            done();
        }).catch((error) => {
            done(new Error('test case failed'));
        });
    });
});