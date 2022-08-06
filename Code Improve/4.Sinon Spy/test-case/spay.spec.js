const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Student = require('../controllers/studentCtrl');
const studentObj = new Student();

describe('---------spy---------', () => {
    it('test user function', () => {
        expect(studentObj.userId()).to.be.equal(12);
    });

    it('function count', () => {
        const spyObj = sinon.spy(studentObj, 'getInfo');
        studentObj.home(5);
        expect(spyObj.calledOnce).to.be.true;
        // expect(spyObj.calledTwice).to.be.true;
        // spyObj.restore();
    });

    it('function arguments check', () => {
        const spyObj = sinon.spy(studentObj, 'getInfo');
        studentObj.home(5);
        expect(spyObj.calledWith(5, 1)).to.be.true;
    });
});