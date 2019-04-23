const isDivisible = require('../8kyu - Is n divisible by x and y');
const should = require('should');

describe('8kyu - Is n divisible by x and y', () => {
  it('Should return false for isDivisible(3,3,4)', (done) => {
    should(isDivisible(3,3,4)).equal(false);
    done();
  });
  it('Should return true for isDivisible(12,3,4)', (done) => {
    should(isDivisible(12,3,4)).equal(true);
    done();
  });
  it('Should return false for isDivisible(8,3,4)', (done) => {
    should(isDivisible(8,3,4)).equal(false);
    done();
  });
  it('Should return true for isDivisible(48,3,4)', (done) => {
    should(isDivisible(48,3,4)).equal(true);
    done();
  });
  it('Should return true for isDivisible(100,5,10)', (done) => {
    should(isDivisible(100,5,10)).equal(true);
    done();
  });       
});