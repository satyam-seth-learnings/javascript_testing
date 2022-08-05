const expect = require('chai').expect;
const axios = require('axios');

describe('Data driven tests', () => {

    let users = [
        {
            id: 1,
            email: 'george.bluth@reqres.in'
        },
        {
            id: 2,
            email: 'janet.weaver@reqres.in'
        },
        {
            id: 3,
            email: 'emma.wong@reqres.in'
        }
    ]

    users.forEach((user) => {
        it(`Async data driven test with id equal to ${user.id}`, async () => {
            const res = await axios.get(`https://reqres.in/api/users/${user.id}`);
            expect(res.data.data.email).to.be.eq(user.email);
        });
    })

});