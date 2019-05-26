const towerOfHanoi = require('../7kyu - Tower of Hanoi');
const should = require('should');

describe('7kyu - Tower of Hanoi', () => {
  it('Should return 15 for towerOfHanoi(4)', (done) => {
    should(towerOfHanoi(4)).equal(15);
    done();
  });
  it('Should return 31 for towerOfHanoi(5)', (done) => {
    should(towerOfHanoi(5)).equal(31);
    done();
  });
  it('Should return 1023 for towerOfHanoi(10)', (done) => {
    should(towerOfHanoi(10)).equal(1023);
    done();
  });
  it('Should return 1125899906842623 for towerOfHanoi(50)', (done) => {
    should(towerOfHanoi(50)).equal(1125899906842623);
    done();
  });      
})