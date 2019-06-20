const largestPower = require('../7kyu - Powers of 3');
const should = require('should');

describe('7kyu - Powers of 3', () => {
  it('Should return 0 for largestPower(2)', (done) => {
    should(largestPower(2)).equal(0);
    done();
  });
  it('Should return 0 for largestPower(3)', (done) => {
    should(largestPower(3)).equal(0);
    done();
  }); 
  it('Should return 1 for largestPower(4)', (done) => {
    should(largestPower(4)).equal(1);
    done();
  });
  it('Should return 1 for largestPower(5)', (done) => {
    should(largestPower(5)).equal(1);
    done();
  });
  it('Should return 1 for largestPower(7)', (done) => {
    should(largestPower(7)).equal(1);
    done();
  });        
});