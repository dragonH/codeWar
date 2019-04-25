const step = require('../6kyu - Steps in Primes');
const should = require('should');

describe('6kyu - Steps in Primes', () => {
  it('Should return "[101, 103]" for step(2,100,110)', (done) => {
    should(step(2,100,110)).eqls([101, 103]);
    done();
  });
  it('Should return "[103, 107]" for step(4,100,110)', (done) => {
    should(step(4,100,110)).eqls([103, 107]);
    done();
  });
  it('Should return "[101, 107]" for step(6,100,110)', (done) => {
    should(step(6,100,110)).eqls([101, 107]);
    done();
  });
  it('Should return "[359, 367]" for step(8,300,400)', (done) => {
    should(step(8,300,400)).eqls([359, 367]);
    done();
  });
  it('Should return "[10000139, 10000141]" for step(2,10000000,11000000)', (done) => {
    should(step(2,10000000,11000000)).eqls([10000139, 10000141]);
    done();
  });       
});