const binaryArrayToNumber = require('../7kyu - Ones and Zeros');
const should = require('should');

describe('7kyu - Ones and Zeros', () => {
  it('Should return 1 for binaryArrayToNumber([0, 0, 0, 1])', (done) => {
    should(binaryArrayToNumber([0, 0, 0, 1])).equal(1);
    done();
  });
  it('Should return 2 for binaryArrayToNumber([0, 0, 1, 0])', (done) => {
    should(binaryArrayToNumber([0, 0, 1, 0])).equal(2);
    done();
  });
  it('Should return 5 for binaryArrayToNumber([0, 1, 0, 1])', (done) => {
    should(binaryArrayToNumber([0, 1, 0, 1])).equal(5);
    done();
  });
  it('Should return 9 for binaryArrayToNumber([1, 0, 0, 1])', (done) => {
    should(binaryArrayToNumber([1, 0, 0, 1])).equal(9);
    done();
  });
  it('Should return 2 for binaryArrayToNumber([0, 0, 1, 0])', (done) => {
    should(binaryArrayToNumber([0, 0, 1, 0])).equal(2);
    done();
  });        
});