const XO = require('../7kyu - Exes and Ohs');
const should = require('should');

describe('7kyu - Exes and Ohs', () => {
  it('Should return true for XO("ooxx")', (done) => {
    should(XO('ooxx')).equal(true);
    done();
  });
  it('Should return true for XO("xo0")', (done) => {
    should(XO('xo0')).equal(true);
    done();
  });
  it('Should return false for XO("xxxoo")', (done) => {
    should(XO('xxxoo')).equal(false);
    done();
  });
  it('Should return false for XO("Oo")', (done) => {
    should(XO('Oo')).equal(false);
    done();
  });
  it('Should return true for XO("xxxxxoooxooo")', (done) => {
    should(XO('xxxxxoooxooo')).equal(true);
    done();
  });       
});