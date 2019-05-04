const isNegativeZero = require('../7kyu - Is It Negative Zero (-0)');
const should = require('should');

describe('7kyu - Is It Negative Zero (-0)', () => {
  it('Should return true for isNegativeZero(-0)', (done) => {
    should(isNegativeZero(-0)).equal(true);
    done();
  });
  it('Should return false for isNegativeZero(-5)', (done) => {
    should(isNegativeZero(-5)).equal(false);
    done();
  });
  it('Should return false for isNegativeZero(35)', (done) => {
    should(isNegativeZero(35)).equal(false);
    done();
  });
  it('Should return false for isNegativeZero(35)', (done) => {
    should(isNegativeZero(35)).equal(false);
    done();
  });
  it('Should return false for isNegativeZero(-Infinity)', (done) => {
    should(isNegativeZero(-Infinity)).equal(false);
    done();
  });       
});