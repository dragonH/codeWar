const { add, subtract, multiply, apply } = require('../7kyu - The Crockford Invocation');
const should = require('should');

describe('7kyu - The Crockford Invocation', () => {
  it('Should return 7 for add(3)(4)', (done) => {
    should(add(3)(4)).equal(7);
    done();
  });
  it('Should return -1 for subtract(3)(4)', (done) => {
    should(subtract(3)(4)).equal(-1);
    done();
  });
  it('Should return 12 for multiply(3)(4)', (done) => {
    should(multiply(3)(4)).equal(12);
    done();
  });
  it('Should return 7 for apply(add)(3)(4)', (done) => {
    should(apply(add)(3)(4)).equal(7);
    done();
  }); 
  it('Should return -1 for apply(subtract)(3)(4)', (done) => {
    should(apply(subtract)(3)(4)).equal(-1);
    done();
  });        
});