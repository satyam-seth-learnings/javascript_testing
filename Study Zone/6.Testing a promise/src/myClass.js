class MyClass {
    constructor() {
        console.log('initiate');
    }

    sayHello(str) {
        console.log(str);
    }

    add(arg1, arg2) {
        let result = arg1 + arg2;
        return result;
    }

    callAnotherFn(arg1, arg2) {
        this.sayHello("hello world");
        let result = this.add(arg1, arg2);
        return result;
    }

    callCallback(callback) {
        callback();
    }

    testPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(3), 4000);
        }).then((result) => {
            return result * 2;
        });
    }
}

module.exports = MyClass;