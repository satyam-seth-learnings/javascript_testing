var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('my first test case', () => {
    it('value check', () => {
        assert.equal([1, 2, 3].indexOf(3), 2);
    });

    it('value check 2', () => {
        assert.equal([1, 2, 3].indexOf(2), 3);
    });
});