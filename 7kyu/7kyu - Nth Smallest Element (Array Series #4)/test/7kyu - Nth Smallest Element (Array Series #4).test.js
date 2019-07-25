const nthSmallest = require('../7kyu - Nth Smallest Element (Array Series #4)');
const should = require('should');

describe('7kyu - Nth Smallest Element (Array Series #4)', () => {
  it('Should return 2 for nthSmallest([3,1,2],2)', (done) => {
    should(nthSmallest([3,1,2],2)).equal(2);
    done();
  });
  it('Should return 7 for nthSmallest([15,20,7,10,4,3],3)', (done) => {
    should(nthSmallest([15,20,7,10,4,3],3)).equal(7);
    done();
  }); 
  it('Should return -1 for nthSmallest([-5,-1,-6,-18],4)', (done) => {
    should(nthSmallest([-5,-1,-6,-18],4)).equal(-1);
    done();
  });   
  it('Should return -2 for nthSmallest([-102,-16,-1,-2,-367,-9],5)', (done) => {
    should(nthSmallest([-102,-16,-1,-2,-367,-9],5)).equal(-2);
    done();
  }); 
  it('Should return 2 for nthSmallest([2,169,13,-5,0,-1],4)', (done) => {
    should(nthSmallest([2,169,13,-5,0,-1],4)).equal(2);
    done();
  });   
});