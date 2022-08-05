const expect = require('chai').expect;

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

describe.skip('Data driven tests example - 1', () => {

    it('Sync Method - isEven() when num param is 1', () => {
        const result = isEven(1);
        expect(result).to.be.false;
    });

    it('Sync Method - isEven() when num param is 2', () => {
        const result = isEven(2);
        expect(result).to.be.true;
    });

    it('Sync Method - isEven() when num param is 3', () => {
        const result = isEven(3);
        expect(result).to.be.false;
    });

    it('Sync Method - isEven() when num param is 4', () => {
        const result = isEven(4);
        expect(result).to.be.true;
    });
});

describe('Data driven tests', () => {

    let numbersForTesting = [
        {
            num: 1,
            result: false
        },
        {
            num: 2,
            result: true
        },
        {
            num: 3,
            result: false
        },
        {
            num: 4,
            result: true
        }
    ]

    numbersForTesting.forEach((numberForTesting) => {
        it(`Sync Method - isEven() when num param is ${numberForTesting.num}`, () => {
            const result = isEven(numberForTesting.num);
            expect(result).to.be.eq(numberForTesting.result);
        });
    })

});