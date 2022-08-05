class Calculator {
    constructor(name) {
        this.property = name;
    }
    get calc() {
        return this.property;
    }
    set calc(name) {
        this.property = name;
    }
    myCalc(a, b, callback) {
        callback(a, b);
    }
    sum(a, b) {
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

const myCalc = new Calculator('Casio');
module.exports = { myCalc };
