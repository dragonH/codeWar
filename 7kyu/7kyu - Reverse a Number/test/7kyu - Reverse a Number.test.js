const reverseNumber = require('../7kyu - Reverse a Number');
const should = require('should');

describe('7kyu - Reverse a Number', () => {
  it('Should return 321 for reverseNumber(123)', (done) => {
    should(reverseNumber(123)).equal(321);
    done();
  });
  it('Should return -321 for reverseNumber(-123)', (done) => {
    should(reverseNumber(-123)).equal(-321);
    done();
  });
  it('Should return 1 for reverseNumber(1000)', (done) => {
    should(reverseNumber(1000)).equal(1);
    done();
  }); 
  it('Should return 4321234 for reverseNumber(4321234)', (done) => {
    should(reverseNumber(4321234)).equal(4321234);
    done();
  });
  it('Should return 0 for reverseNumber(0)', (done) => {
    should(reverseNumber(0)).equal(0);
    done();
  });     
});