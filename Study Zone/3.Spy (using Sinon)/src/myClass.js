class MyClass {
    constructor() {
        console.log('initiate');
    }

    add(arg1, arg2) {
        let result = arg1 + arg2;
        return result;
    }

    callAnotherFn(arg1, arg2) {
        let result = this.add(arg1, arg2);
        return result;
    }

    callCallback(callback) {
        callback();
    }
}

module.exports = MyClass;