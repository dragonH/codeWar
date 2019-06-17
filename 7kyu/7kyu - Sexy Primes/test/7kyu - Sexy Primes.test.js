const sexy_prime = require('../7kyu - Sexy Primes');
const should = require('should');
describe('7kyu - Sexy Primes', () => {
  it('Should return true for sexy_prime(5, 11)', (done) => {
    should(sexy_prime(5, 11)).equal(true);
    done();
  });
  it('Should return true for sexy_prime(13, 19)', (done) => {
    should(sexy_prime(13, 19)).equal(true);
    done();
  });
  it('Should return true for sexy_prime(83, 89)', (done) => {
    should(sexy_prime(83, 89)).equal(true);
    done();
  });
  it('Should return false for sexy_prime(1, 11)', (done) => {
    should(sexy_prime(1, 11)).equal(false);
    done();
  });      
});