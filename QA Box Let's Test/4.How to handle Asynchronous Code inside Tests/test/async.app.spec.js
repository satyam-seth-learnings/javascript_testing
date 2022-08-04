const expect = require('chai').expect;
const axios = require('axios');

describe('Async test suite', () => {
    // it('Promised based way', () => {
    //     return axios.get('https://reqres.in/api/users/2').then(res => {
    //         expect(res.data.data.email).to.be.equal('janet.weaver@reqres.int');
    //     })
    // })

    // it('done based way', (done) => {
    //     return axios.get('https://reqres.in/api/users/2').then(res => {
    //         expect(res.data.data.email).to.be.equal('janet.weaver@reqres.int');
    //         done();
    //     }).catch(err => {
    //         done(err);
    //     })
    // })

    it('async await based way', async () => {
        const res = await axios.get('https://reqres.in/api/users/2')
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.int');
    })

    it('Test 2', () => {
        console.log('test 2');
    })
})