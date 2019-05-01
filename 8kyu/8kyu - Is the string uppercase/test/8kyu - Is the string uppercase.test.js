require('../8kyu - Is the string uppercase');
const should = require('should');

describe('8kyu - Is the string uppercase', () => {
  it('Should return false for "abc".isUpperCase()', (done) => {
    should('abc'.isUpperCase()).equal(false);
    done();
  });
  it('Should return true for "C".isUpperCase()', (done) => {
    should('C'.isUpperCase()).equal(true);
    done();
  });
  it('Should return false for "Cc".isUpperCase()', (done) => {
    should('Cc'.isUpperCase()).equal(false);
    done();
  });
  it('Should return false for "CcCcCcCcC".isUpperCase()', (done) => {
    should('CcCcCcCcC'.isUpperCase()).equal(false);
    done();
  });
  it('Should return true for "ABCDEFG".isUpperCase()', (done) => {
    should('ABCDEFG'.isUpperCase()).equal(true);
    done();
  });     
});