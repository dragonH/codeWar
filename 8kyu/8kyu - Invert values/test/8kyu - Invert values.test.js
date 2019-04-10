const invert = require('../8kyu - Invert values');
const should = require('should');

describe('8kyu - Invert values', () => {
  it('Should return [-1,-2,-3,-4,-5] for invert([1,2,3,4,5])', (done) => {
    should(invert([1,2,3,4,5])).eql([-1,-2,-3,-4,-5]);
    done();
  });
  it('Should return [-1,2,-3,4,-5] for invert([1,-2,3,-4,5])', (done) => {
    should(invert([1,-2,3,-4,5])).eql([-1,2,-3,4,-5]);
    done();
  });
  it('Should return [] for invert([])', (done) => {
    should(invert([])).eql([]);
    done();
  });
  it('Should return [0] for invert([0])', (done) => {
    should(invert([0])).eql([0]);
    done();
  });    
});