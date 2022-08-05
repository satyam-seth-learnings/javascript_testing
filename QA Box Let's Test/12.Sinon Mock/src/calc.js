class Calculator {
    printHi(msg) {
        console.log(msg);
    }
    sum(a, b) {
        this.printHi('Qa Box');
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    mul(a, b) {
        return a * b;
    }
    div(a, b) {
        return a / b;
    }
}

const myCalc = new Calculator();
module.exports = { myCalc };
