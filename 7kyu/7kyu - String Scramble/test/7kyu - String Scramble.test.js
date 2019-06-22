const scramble = require('../7kyu - String Scramble');
const should = require('should');

describe('7kyu - String Scramble', () => {
  it("Should return acdb for scramble('abcd', [0,3,1,2])", (done) => {
    should(scramble('abcd', [0,3,1,2])).equal('acdb');
    done();
  });
  it("Should return c0s3s1 for scramble('sc301s', [4,0,3,1,5,2])", (done) => {
    should(scramble('sc301s', [4,0,3,1,5,2])).equal('c0s3s1');
    done();
  });
  it("Should return 5sblk for scramble('bskl5', [2,1,4,3,0])", (done) => {
    should(scramble('bskl5', [2,1,4,3,0])).equal('5sblk');
    done();
  });    
});