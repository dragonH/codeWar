const factorial = require('../7kyu - Factorial');
const should = require('should');

describe('7kyu - Factorial', () => {
  it('Shoud return 1 for factorial(0)', (done) => {
    should(factorial(0)).equal(1);
    done();
  });
  it('Shoud return 1 for factorial(1)', (done) => {
    should(factorial(1)).equal(1);
    done();
  });
  it('Shoud return 24 for factorial(4)', (done) => {
    should(factorial(4)).equal(24);
    done();
  }); 
  it('Shoud return 5040 for factorial(7)', (done) => {
    should(factorial(7)).equal(5040);
    done();
  });
  it('Shoud return 355687428096000 for factorial(17)', (done) => {
    should(factorial(17)).equal(355687428096000);
    done();
  });        
});