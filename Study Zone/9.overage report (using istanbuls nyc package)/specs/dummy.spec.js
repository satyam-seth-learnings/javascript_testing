const chai = require('chai');
const expect = chai.expect;

describe('Dummy test suit', () => {
    it('dummy test case', () => {
        expect(true).to.be.true;
    });
});

beforeEach(() => {
    console.log('=========== Root level hook ===========');
});