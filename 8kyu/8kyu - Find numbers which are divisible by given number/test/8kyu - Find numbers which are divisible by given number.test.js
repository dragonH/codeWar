const divisibleBy = require('../8kyu - Find numbers which are divisible by given number');
const should = require('should');

describe('8kyu - Find numbers which are divisible by given number', () => {
  it('Should return [2,4,6] for divisibleBy([1,2,3,4,5,6], 2)', (done) => {
    should(divisibleBy([1,2,3,4,5,6], 2)).eql([2,4,6]);
    done();
  });
  it('Should return [3,6] for divisibleBy([1,2,3,4,5,6], 3)', (done) => {
    should(divisibleBy([1,2,3,4,5,6], 3)).eql([3,6]);
    done();
  });
  it('Should return [0,4] for divisibleBy([0,1,2,3,4,5,6], 4)', (done) => {
    should(divisibleBy([0,1,2,3,4,5,6], 4)).eql([0,4]);
    done();
  });    
});