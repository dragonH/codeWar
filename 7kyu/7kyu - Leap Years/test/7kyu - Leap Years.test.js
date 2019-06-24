const isLeapYear = require('../7kyu - Leap Years');
const should = require('should');

describe('7kyu - Leap Years', () => {
  it('Should return false for isLeapYear(1000)', (done) => {
    should(isLeapYear(1000)).equal(false);
    done();
  });
  it('Should return true for isLeapYear(1200)', (done) => {
    should(isLeapYear(1200)).equal(true);
    done();
  });
  it('Should return false for isLeapYear(1234)', (done) => {
    should(isLeapYear(1234)).equal(false);
    done();
  });
  it('Should return false for isLeapYear(1800)', (done) => {
    should(isLeapYear(1800)).equal(false);
    done();
  });
  it('Should return false for isLeapYear(1900)', (done) => {
    should(isLeapYear(1900)).equal(false);
    done();
  });        
});