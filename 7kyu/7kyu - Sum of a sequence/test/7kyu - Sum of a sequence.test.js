const sequenceSum = require('../7kyu - Sum of a sequence');
const should = require('should');

describe('7kyu - Sum of a sequence', () => {
  it('Should return 12 for sequenceSum(2, 6, 2)', (done) => {
    should(sequenceSum(2, 6, 2)).equal(12);
    done();
  });
  it('Should return 15 for sequenceSum(1, 5, 1)', (done) => {
    should(sequenceSum(1, 5, 1)).equal(15);
    done();
  });
  it('Should return 5 for sequenceSum(1, 5, 3)', (done) => {
    should(sequenceSum(1, 5, 3)).equal(5);
    done();
  });
  it('Should return 45 for sequenceSum(0, 15, 3)', (done) => {
    should(sequenceSum(0, 15, 3)).equal(45);
    done();
  });
  it('Should return 0 for sequenceSum(16, 15, 3)', (done) => {
    should(sequenceSum(16, 15, 3)).equal(0);
    done();
  });        
});