const expect = require('chai').expect;
const axios = require('axios');

// describe.only('Async test suite', function () {
// describe.skip('Async test suite', function () {
describe('Async test suite', function () {
    this.retries(3);
    let count = 0;

    // it.skip('Promised based way', function () {
    it.only('Promised based way', function () {
        this.timeout(10);

        console.log('Retry Attempt#', count);
        count++;
        this.retries(5);

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

describe('2 - async test suite', function () {
    this.retries(3);
    let count = 0;

    it('Promised based way', function () {
        this.timeout(10);

        console.log('Retry Attempt#', count);
        count++;
        this.retries(5);

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