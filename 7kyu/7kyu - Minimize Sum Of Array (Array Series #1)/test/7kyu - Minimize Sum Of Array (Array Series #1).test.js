const minSum = require('../7kyu - Minimize Sum Of Array (Array Series #1)');
const should = require('should');

describe('7kyu - Minimize Sum Of Array (Array Series #1)', () => {
  it('Should return 22 for minSum([5,4,2,3])', (done) => {
    should(minSum([5,4,2,3])).equal(22);
    done();
  });
  it('Should return 342 for minSum([12,6,10,26,3,24])', (done) => {
    should(minSum([12,6,10,26,3,24])).equal(342);
    done();
  });  
  it('Should return 74 for minSum([9,2,8,7,5,4,0,6])', (done) => {
    should(minSum([9,2,8,7,5,4,0,6])).equal(74);
    done();
  });    
});