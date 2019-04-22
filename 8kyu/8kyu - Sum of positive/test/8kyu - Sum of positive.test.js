const positiveSum = require('../8kyu - Sum of positive');
const should = require('should');

describe('8kyu - Sum of positive', () => {
  it('Should return 15 for positiveSum([1,2,3,4,5])', (done) => {
    should(positiveSum([1,2,3,4,5])).equal(15);
    done();
  });
  it('Should return 13 for positiveSum([1,-2,3,4,5])', (done) => {
    should(positiveSum([1,-2,3,4,5])).equal(13);
    done();
  });
  it('Should return 0 for positiveSum([])', (done) => {
    should(positiveSum([])).equal(0);
    done();
  });
  it('Should return 0 for positiveSum([-1,-2,-3,-4,-5])', (done) => {
    should(positiveSum([-1,-2,-3,-4,-5])).equal(0);
    done();
  });
  it('Should return 9 for positiveSum([-1,2,3,4,-5])', (done) => {
    should(positiveSum([-1,2,3,4,-5])).equal(9);
    done();
  });        
});