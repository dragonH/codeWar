const isOpposite = require('../8kyu - They say that only the name');
const should = require('should');

describe('8kyu - They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1 Are they opposite', () => {
  it('Should return true for isOpposite("ab","AB")', (done) => {
    should(isOpposite("ab","AB")).equal(true);
    done();
  });
  it('Should return true for isOpposite("aB","Ab")', (done) => {
    should(isOpposite("aB","Ab")).equal(true);
    done();
  });
  it('Should return true for isOpposite("aBcd","AbCD")', (done) => {
    should(isOpposite("aBcd","AbCD")).equal(true);
    done();
  });
  it('Should return false for isOpposite("","")', (done) => {
    should(isOpposite("","")).equal(false);
    done();
  });
  it('Should return false for isOpposite("AB","Ab")', (done) => {
    should(isOpposite("AB","Ab")).equal(false);
    done();
  });        
});