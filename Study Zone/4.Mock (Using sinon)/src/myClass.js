class MyClass {
    constructor() {
        console.log('initiate');
    }

    // sayHello() {
    //     console.log("Hello");
    // }

    sayHello(str) {
        console.log(str);
    }

    add(arg1, arg2) {
        let result = arg1 + arg2;
        return result;
    }

    callAnotherFn(arg1, arg2) {
        // this.sayHello();
        this.sayHello("hello world");
        let result = this.add(arg1, arg2);
        return result;
    }

    callCallback(callback) {
        callback();
    }
}

module.exports = MyClass;