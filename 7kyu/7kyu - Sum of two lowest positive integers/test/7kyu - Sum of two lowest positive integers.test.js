const sumTwoSmallestNumbers = require('../7kyu - Sum of two lowest positive integers');
const should = require('should');

describe('7kyu - Sum of two lowest positive integers', () => {
  it('Should return 13 for sumTwoSmallestNumbers([5, 8, 12, 19, 22])', (done) => {
    should(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).equal(13);
    done();
  });
  it('Should return 6 for sumTwoSmallestNumbers([15, 28, 4, 2, 43])', (done) => {
    should(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).equal(6);
    done();
  });
  it('Should return 10 for sumTwoSmallestNumbers([3, 87, 45, 12, 7])', (done) => {
    should(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).equal(10);
    done();
  });
  it('Should return 24 for sumTwoSmallestNumbers([23, 71, 33, 82, 1])', (done) => {
    should(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).equal(24);
    done();
  });
  it('Should return 3453455 for sumTwoSmallestNumbers([10,343445353,3453445,3453545353453])', (done) => {
    should(sumTwoSmallestNumbers([10,343445353,3453445,3453545353453])).equal(3453455);
    done();
  });        
});