const boredom = require('../7kyu - The Office II - Boredom Score');
const should = require('should');

describe('7kyu - The Office II - Boredom Score', () => {
  it("Should return 'kill me now' for boredom(obj)", (done) => {
    const obj = {
      tim: 'change', jim: 'accounts', randy: 'canteen', sandy: 'change', andy: 'change',
      katie: 'IS', laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts', mr: 'finance'
    };
    should(boredom(obj)).equal('kill me now');
    done();
  });
  it("Should return 'i can handle this' for boredom(obj)", (done) => {
    const obj = {
      tim: 'IS', jim: 'finance', randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
      katie: 'cleaning', laura: 'pissing about', saajid: 'regulation', alex: 'regulation', john: 'accounts', mr: 'canteen'
    };
    should(boredom(obj)).equal('i can handle this');
    done();
  });
  it("Should return 'party time!!' for boredom(obj)", (done) => {
    const obj = {
      tim: 'accounts', jim: 'accounts', randy: 'pissing about', sandy: 'finance', andy: 'change',
      katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about', john: 'retail', mr: 'pissing about'
    };
    should(boredom(obj)).equal('party time!!');
    done();
  });  
});