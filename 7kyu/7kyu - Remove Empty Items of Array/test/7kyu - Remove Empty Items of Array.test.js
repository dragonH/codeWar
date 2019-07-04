const clean = require('../7kyu - Remove Empty Items of Array');
const should = require('should');

describe('7kyu - Remove Empty Items of Array', () => {
  it('should return [] for clean([])', (done) => {
    should(clean([])).eql([]);
    done();
  });
  it('should return [] for clean(Array(500000)', (done) => {
    should(clean(Array(500000))).eql([]);
    done();
  });
  it('should return [1, 2] for clean([1, 2])', (done) => {
    should(clean([1, 2])).eql([1, 2]);
    done();
  });
  it('should return [1, 2, 3, 4] for clean([1, 2, , , 3, 4,])', (done) => {
    should(clean([1, 2, , , 3, 4,])).eql([1, 2, 3, 4]);
    done();
  });
  it('should return [1, 2, [], 3] for clean([1, 2, [],, 3])', (done) => {
    should(clean([1, 2, [],, 3])).eql([1, 2, [], 3]);
    done();
  });       
});