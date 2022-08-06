class Student {
    constructor() { }

    home(type) {
        let data = this.getInfo(type, 1);
        return data + 5;
    }

    userId() {
        return 12;
    }

    getInfo(type, status) {
        return type;
    }
}

module.exports = Student;