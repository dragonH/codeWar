const stray = require('../7kyu - Find the stray number');
const should = require('should');

describe('7kyu - Find the stray number', () => {
  it('Should return 2 for stray([1, 1, 2])', (done) => {
    should(stray([1, 1, 2])).equal(2);
    done();
  });
  it('Should return 3 for stray([17, 17, 3, 17, 17, 17, 17])', (done) => {
    should(stray([17, 17, 3, 17, 17, 17, 17])).equal(3);
    done();
  });
  it('Should return 8 for stray([8, 1, 1, 1, 1, 1, 1])', (done) => {
    should(stray([8, 1, 1, 1, 1, 1, 1])).equal(8);
    done();
  });
  it('Should return 0 for stray([1, 1, 1, 1, 1, 1, 0])', (done) => {
    should(stray([1, 1, 1, 1, 1, 1, 0])).equal(0);
    done();
  });
  it('Should return 7 for stray([0, 0, 0, 7, 0, 0, 0])', (done) => {
    should(stray([0, 0, 0, 7, 0, 0, 0])).equal(7);
    done();
  });        
});