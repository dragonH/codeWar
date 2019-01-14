const rowSumOddNumbers = require('../7kyu - Sum of odd numbers');
const should = require('should')

describe('7kyu - Sum of odd numbers', () => {
  it('n=1, it should return 1', (done) => {
    let ans = rowSumOddNumbers(1);
    ans.should.equal(1);
    done();
  });
  it('n=6, it should return 216', (done) => {
    let ans = rowSumOddNumbers(6);
    ans.should.equal(216);
    done();
  });  
});
