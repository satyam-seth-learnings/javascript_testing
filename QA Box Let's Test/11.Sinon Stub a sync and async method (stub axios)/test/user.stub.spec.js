const { user } = require('../src/user');
const expect = require('chai').expect;
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const axios = require('axios');

chai.use(sinonChai);

describe.skip('Sync Code', () => {
    it('verify the greetMessage method', () => {
        // Arrange
        // Act
        let res = user.greetMessage('World');
        // Assert
        expect(res).to.be.equal('Hello World');
    });

    // it('Stub the greet method example - 1', () => {
    //     // Arrange
    //     const stub = sinon.stub(user, 'greet');
    //     stub.withArgs('World').returns('Good Bye!!!');
    //     // Act
    //     let res = user.greetMessage('World');
    //     // Assert
    //     expect(res).to.be.equal('Good Bye!!!');
    // });
    it('Stub the greet method', () => {
        // Arrange
        const stub = sinon.stub(user, 'greet');
        stub.withArgs('World')
            .onCall(0).returns('Good Bye!!!')
            .onCall(1).returns('Simply Amazing!!!');
        // Act
        let res1 = user.greetMessage('World');
        let res2 = user.greetMessage('World');
        // Assert
        expect(res1).to.be.equal('Good Bye!!!');
        expect(res2).to.be.equal('Simply Amazing!!!');
    });
});

describe.skip('Async Code', () => {
    it('Check user data ', async () => {
        const result = await axios.get('https://reqres.in/api/users/2');
        const data = result.data.data;

        expect(data.id).to.be.equal(2);
        expect(data.email).to.be.equal('janet.weaver@reqres.in');
        expect(data.first_name).to.be.equal('Janet');

    });
});

describe('getUserDataById - Stub Async Methods', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(user, 'getUserDataById');
    });

    it('stub getUserDataById method and check id, email and first name', async () => {
        // Arrange
        const output = {
            id: 2,
            email: 'abc.def@xyz.com',
            first_name: 'Avi'
        }
        stub.withArgs(2).returns(Promise.resolve(output));

        // Act
        const res = await user.getUserDataById(2);

        // Assert
        expect(res.id).to.be.equal(2);
        expect(res.email).to.be.equal('abc.def@xyz.com');
        expect(res.first_name).to.be.equal('Avi');
    });

    afterEach(() => {
        stub.restore();
    });
});
