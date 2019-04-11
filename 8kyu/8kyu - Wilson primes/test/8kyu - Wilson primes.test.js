const amIWilson = require('../8kyu - Wilson primes');
const should = require('should');

describe('8kyu - Wilson primes', () => {
  it('Should return true for amIWilson(5)', (done) => {
    should(amIWilson(5)).equal(true);
    done();
  });
  it('Should return false for amIWilson(8)', (done) => {
    should(amIWilson(8)).equal(false);
    done();
  });
  it('Should return false for amIWilson(9)', (done) => {
    should(amIWilson(9)).equal(false);
    done();
  });
  it('Should return false for amIWilson(11)', (done) => {
    should(amIWilson(11)).equal(false);
    done();
  });
  it('Should return true for amIWilson(13)', (done) => {
    should(amIWilson(13)).equal(true);
    done();
  });       
});