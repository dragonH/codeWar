const multiply = require('../8kyu - Multiply');
const should = require('should');

describe('8kyu - Multiply', () => {
  it('Should return 1 for multiply(1,1)', (done) => {
    should(multiply(1,1)).equal(1);
    done();
  });
  it('Should return 2 for multiply(2,1)', (done) => {
    should(multiply(2,1)).equal(2);
    done();
  });
  it('Should return 4 for multiply(2,2)', (done) => {
    should(multiply(2,2)).equal(4);
    done();
  });
  it('Should return 15 for multiply(3,5)', (done) => {
    should(multiply(3,5)).equal(15);
    done();
  });      
});