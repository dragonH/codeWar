const findOutlier = require('../6kyu - Find The Parity Outlier');
const should = require('should');
describe('6kyu - Find The Parity Outlier', () => {
  it('Should return 1 for findOutlier([0, 1, 2])', (done) => {
    should(findOutlier([0, 1, 2])).be.a.Number();
    should(findOutlier([0, 1, 2])).be.equal(1);
    done();
  });
  it('Should return 2 for findOutlier([1, 2, 3])', (done) => {
    should(findOutlier([1, 2, 3])).be.a.Number();
    should(findOutlier([1, 2, 3])).be.equal(2);
    done();
  });
  it('Should return 3 for findOutlier([2,6,8,10,3])', (done) => {
    should(findOutlier([2,6,8,10,3])).be.a.Number();
    should(findOutlier([2,6,8,10,3])).be.equal(3);
    done();
  });
  it('Should return 3 for findOutlier([0,0,3,0,0])', (done) => {
    should(findOutlier([0,0,3,0,0])).be.a.Number();
    should(findOutlier([0,0,3,0,0])).be.equal(3);
    done();
  });
  it('Should return 3 for findOutlier([1,1,0,1,1])', (done) => {
    should(findOutlier([1,1,0,1,1])).be.a.Number();
    should(findOutlier([1,1,0,1,1])).be.equal(0);
    done();
  });  
});