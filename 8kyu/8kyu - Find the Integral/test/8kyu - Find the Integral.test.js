const integrate = require('../8kyu - Find the Integral');
const should = require('should');

describe('8kyu - Find the Integral', (done) => {
  it('Should return "1x^3" for integrate(3,2)', (done) => {
    should(integrate(3,2)).equal('1x^3');
    done();
  });
  it('Should return "1.5x^6" for integrate(9,5)', (done) => {
    should(integrate(9,5)).equal('1.5x^6');
    done();
  });  
});