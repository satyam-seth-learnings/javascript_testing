const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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

    xhrFn() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("post", "https://jsonplaceholder.typicode.com/posts", true);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.status);
                    }
                }
            };

            xhr.send();
        })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error;
            });
    }
}

module.exports = MyClass;