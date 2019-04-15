const SmallestIntegerFinder = require('../8kyu - Find the smallest integer in the array');
const should = require('should');

describe('8kyu - Find the smallest integer in the array', () => {
  it('Should return 8 for sif.findSmallestInt([78,56,232,12,8])', (done) => {
    const sif = new SmallestIntegerFinder();
    should(sif.findSmallestInt([78,56,232,12,8])).eqls(8);
    done();
  });
  it('Should return 12 for sif.findSmallestInt([78,56,232,12,18])', (done) => {
    const sif = new SmallestIntegerFinder();
    should(sif.findSmallestInt([78,56,232,12,18])).eqls(12);
    done();
  });
  it('Should return 56 for sif.findSmallestInt([78,56,232,412,228])', (done) => {
    const sif = new SmallestIntegerFinder();
    should(sif.findSmallestInt([78,56,232,412,228])).eqls(56);
    done();
  });
  it('Should return 0 for sif.findSmallestInt([78,56,232,12,0])', (done) => {
    const sif = new SmallestIntegerFinder();
    should(sif.findSmallestInt([78,56,232,12,0])).eqls(0);
    done();
  });
  it('Should return 1 for sif.findSmallestInt([1,56,232,12,8])', (done) => {
    const sif = new SmallestIntegerFinder();
    should(sif.findSmallestInt([1,56,232,12,8])).eqls(1);
    done();
  });     
});