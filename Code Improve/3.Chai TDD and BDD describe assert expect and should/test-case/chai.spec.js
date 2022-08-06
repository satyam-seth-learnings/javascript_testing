const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

// ####### ASSERT #######
describe('-------Aspect check-------', () => {

    let userName = 'code improve';
    let mylist = {
        item: [
            { id: 1, name: 'demo' },
        ],
        title: 'user list'
    }

    it('check string', () => {
        assert.typeOf(userName, 'string');
    });

    it('equal match', () => {
        assert.equal(userName, 'code improve');
    });

    it('length match', () => {
        assert.lengthOf(mylist.item, 1);
    });
});

// ####### SHOULD #######
describe('should check', () => {

    let userName = 'code improve';
    let mylist = {
        item: [
            { id: 1, name: 'demo' },
        ],
        title: 'user list'
    }

    it('check string', () => {
        userName.should.be.a('string');
    });

    it('equal check', () => {
        userName.should.equal('code improve');
    });

    it('length check', () => {
        // mylist.item.should.have.lengthOf(1);
        mylist.should.have.property('item').with.length(1);
    });
});

// ####### EXPECT #######
describe('check expect', () => {

    let userName = 'code improve';
    let mylist = {
        item: [
            { id: 1, name: 'demo' },
        ],
        title: 'user list',
        address: {
            country: 'India',
            phoneNo: ['9090909090', '7878787878']
        }
    }

    it('string match', () => {
        expect(userName).to.be.a('string');
    });

    it('equal match', () => {
        expect(userName).to.equal('code improve');
    });

    it('length match', () => {
        expect(userName).to.lengthOf(12);
    });

    it('object length', () => {
        expect(mylist).to.have.property('item').with.lengthOf(1);
    });

    it('api object length', () => {
        expect(mylist).to.have.all.keys('item', 'title', 'address');
    });

    it('phone no', () => {
        expect(mylist).to.have.nested.property('address.phoneNo');
        expect(mylist).to.have.nested.property('address.phoneNo[0]');
        // expect(mylist).to.have.nested.property('address.phoneNo[2]');
        expect(mylist).to.have.nested.include({ 'address.phoneNo[1]': '7878787878' });
    });

    it('country', () => {
        // expect(mylist).to.have.nested.property('address.country', 'India');
        expect(mylist).to.have.nested.include({ 'address.country': 'India' });
    });
});