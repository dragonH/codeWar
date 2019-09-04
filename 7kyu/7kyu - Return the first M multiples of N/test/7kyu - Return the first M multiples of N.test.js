const multiples = require('../7kyu - Return the first M multiples of N');
const should = require('should');

describe('7kyu - Return the first M multiples of N', () => {
  it('Should return [5, 10, 15] for multiples(3, 5)', (done) => {
    should(multiples(3, 5)).eqls([5, 10, 15]);
    done();
  });
  it('Should return [3.14] for multiples(1, 3.14)', (done) => {
    should(multiples(1, 3.14)).eqls([3.14]);
    done();
  });  
  it('Should return [-1, -2, -3, -4, -5] for multiples(5, -1)', (done) => {
    should(multiples(5, -1)).eqls([-1, -2, -3, -4, -5]);
    done();
  });    
});