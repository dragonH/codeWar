const last = require('../7kyu - 99 Problems, 1 last in list');
const should = require('should');

describe('7kyu - 99 Problems, 1 last in list', () => {
  it('Should return 3 for last([1,2,3])', (done) => {
    should(last([1,2,3])).equal(3);
    done();
  });
  it('Should return null for last([])', (done) => {
    should(last([])).equal(null);
    done();
  });
  it('Should return 0 for last([2,1,0])', (done) => {
    should(last([2,1,0])).equal(0);
    done();
  });
  it('Should return 2 for last([0,1,2])', (done) => {
    should(last([0,1,2])).equal(2);
    done();
  });      
});