const evenNumbers = require('../7kyu - Even numbers in an array');
const should = require('should');

describe('7kyu - Even numbers in an array', () => {
  it('Should return [4, 6, 8] for evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)', (done) => {
    should(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).eql([4, 6, 8]);
    done();
  });
  it('Should return [-8, 26] for evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)', (done) => {
    should(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)).eql([-8, 26]);
    done();
  });
  it('Should return [6] for evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)', (done) => {
    should(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)).eql([6]);
    done();
  });    
});