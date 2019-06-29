const duplicates = require('../7kyu - Find all pairs');
const should = require('should');

describe('7kyu - Find all pairs', () => {
  it('Should return 2 for duplicates([1, 2, 5, 6, 5, 2])', (done) => {
    should(duplicates([1, 2, 5, 6, 5, 2])).equal(2);
    done();
  });
  it('Should return 4 for duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])', (done) => {
    should(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])).equal(4);
    done();
  }); 
  it('Should return 3 for duplicates([0, 0, 0, 0, 0, 0, 0])', (done) => {
    should(duplicates([0, 0, 0, 0, 0, 0, 0])).equal(3);
    done();
  });
  it('Should return 1 for duplicates([1000, 1000])', (done) => {
    should(duplicates([1000, 1000])).equal(1);
    done();
  });
  it('Should return 0 for duplicates([])', (done) => {
    should(duplicates([])).equal(0);
    done();
  });       
});