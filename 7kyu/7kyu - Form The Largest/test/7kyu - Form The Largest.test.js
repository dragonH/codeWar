const maxNumber = require('../7kyu - Form The Largest');
const should = require('should');

describe('7kyu - Form The Largest', () => {
  it('Should return 321 for maxNumber(213)', (done) => {
    should(maxNumber(213)).equal(321);
    done();
  });
  it('Should return 9873 for maxNumber(7389)', (done) => {
    should(maxNumber(7389)).equal(9873);
    done();
  });
  it('Should return 97632 for maxNumber(63792)', (done) => {
    should(maxNumber(63792)).equal(97632);
    done();
  });
  it('Should return 977665 for maxNumber(566797)', (done) => {
    should(maxNumber(566797)).equal(977665);
    done();
  });
  it('Should return 1000000 for maxNumber(1000000)', (done) => {
    should(maxNumber(1000000)).equal(1000000);
    done();
  });       
});