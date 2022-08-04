const expect = require('chai').expect;
const axios = require('axios');

describe('Async test suite', function () {

    it('Promised based way', function () {
        return axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
        })
    })

    it('done based way', (done) => {
        axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
            done();
        }).catch(err => {
            done(err);
        })
    })

    it('async await based way', async () => {
        const res = await axios.get('https://reqres.in/api/users/2')
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
    })

    it('Test 2', () => {
        console.log('test 2');
    })
})

describe('2 - async test suite', function () {
    this.retries(3);
    let count = 0;

    it('Promised based way', function () {
        return axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.int');
        })
    })

    it('done based way', (done) => {
        axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
            done();
        }).catch(err => {
            done(err);
        })
    })

    it('async await based way', async () => {
        const res = await axios.get('https://reqres.in/api/users/2')
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
    })

    it('Test 2', () => {
        console.log('test 2');
    })
})