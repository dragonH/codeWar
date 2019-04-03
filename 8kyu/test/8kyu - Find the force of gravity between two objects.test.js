const solution = require('../8kyu - Find the force of gravity between two objects');
const should = require('should');

describe('8kyu - Find the force of gravity between two objects', () => {
  it('Should return 6.67e-12 for solution([1000, 1000, 100], ["g", "kg", "m"])', (done) => {
    should(solution([1000, 1000, 100], ["g", "kg", "m"])).equal(6.67e-12);
    done();
  });
  it('Should return 6.67e-9 for solution([1000, 1000, 100], ["kg", "kg", "m"])', (done) => {
    should(solution([1000, 1000, 100], ["kg", "kg", "m"])).eqls(6.67e-9);
    done();
  });
  it('Should return 0.0000667 for solution([1000, 1000, 100], ["kg", "kg", "cm"])', (done) => {
    should(solution([1000, 1000, 100], ["kg", "kg", "cm"])).equal(0.0000667);
    done();
  });  
});