const findSum = require('../7kyu - Sum of all the multiples of 3 or 5');
const should = require('should');

describe('7kyu - Sum of all the multiples of 3 or 5', () => {
  it('Should return 8 for findSum(5)', (done) => {
    should(findSum(5)).equal(8);
    done();
  });
  it('Should return 33 for findSum(10)', (done) => {
    should(findSum(10)).equal(33);
    done();
  });
  it('Should return 2418 for findSum(100)', (done) => {
    should(findSum(100)).equal(2418);
    done();
  });
  it('Should return 234168 for findSum(1000)', (done) => {
    should(findSum(1000)).equal(234168);
    done();
  });      
});