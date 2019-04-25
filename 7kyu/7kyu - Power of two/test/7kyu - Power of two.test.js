const isPowerOfTwo = require('../7kyu - Power of two');
const should = require('should');

describe('7kyu - Power of two', () => {
  it('Should return true for isPowerOfTwo(1024)', (done) => {
    should(isPowerOfTwo(1024)).equal(true);
    done();
  });
  it('Should return true for isPowerOfTwo(4096)', (done) => {
    should(isPowerOfTwo(4096)).equal(true);
    done();
  });
  it('Should return false for isPowerOfTwo(333)', (done) => {
    should(isPowerOfTwo(333)).equal(false);
    done();
  });
  it('Should return true for isPowerOfTwo(1)', (done) => {
    should(isPowerOfTwo(1)).equal(true);
    done();
  });
  it('Should return true for isPowerOfTwo(2)', (done) => {
    should(isPowerOfTwo(2)).equal(true);
    done();
  });       
});