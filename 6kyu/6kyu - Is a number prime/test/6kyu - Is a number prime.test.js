const isPrime = require('../6kyu - Is a number prime');
const should = require('should');
describe('6kyu - Is a number prime', () => {
  it('should return false for isPrime(0)', (done) => {
    isPrime(0).should.equal(false);
    done();
  });
  it('should return true for isPrime(73)', (done) => {
    isPrime(73).should.equal(true);
    done();
  });  
  it('should return true for isPrime(5099)', (done) => {
    isPrime(5099).should.equal(true);
    done();
  });   
});