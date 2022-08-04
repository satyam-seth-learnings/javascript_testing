const { add, sub } = require('../src/app');
const expect = require('chai').expect;

// BDD
describe('Suite 1', () => {
    afterEach(() => {
        console.log('afterEach');
    });
    beforeEach(() => {
        console.log('beforeEach');
    });
    after(() => {
        console.log('after');
    });
    before(() => {
        console.log('before');
    });
    it('add(2, 3) should return 5', () => {
        console.log('it');
    })
    it('two', () => {
        console.log('it two');
    })
})

// TDD
const { suite, test, suiteSetup, suiteTeardown, setup, teardown } = require('mocha');

suite('Suite 2', () => {
    teardown(() => {
        console.log('teardown');
    });
    setup(() => {
        console.log('setup');
    });
    suiteTeardown(() => {
        console.log('suiteTeardown');
    });
    suiteSetup(() => {
        console.log('suiteSetup');
    });
    test('add(3, 3) should return 6', () => {
        console.log('test');
    })
    test('test 2', () => {
        console.log('test 2');
    })
})
