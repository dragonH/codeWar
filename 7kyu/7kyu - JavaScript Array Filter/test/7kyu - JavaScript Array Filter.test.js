const getEvenNumbers = require('../7kyu - JavaScript Array Filter');
const should = require('should');

describe('7kyu - JavaScript Array Filter', () => {
  it('Should return [2] for getEvenNumbers([1,2])', (done) => {
    should(getEvenNumbers([1,2])).eql([2]);
    done();
  });
  it('Should return [2,6,8,10] for getEvenNumbers([1,2,4,5,6,7,8,9,10])', (done) => {
    should(getEvenNumbers([1,2,3,5,6,7,8,9,10])).eql([2,6,8,10]);
    done();
  });
  it('Should return [12,14] for getEvenNumbers([12,14,15])', (done) => {
    should(getEvenNumbers([12,14,15])).eql([12,14]);
    done();
  });
  it('Should return [] for getEvenNumbers([13,15])', (done) => {
    should(getEvenNumbers([13,15])).eql([]);
    done();
  });
  it('Should return [] for getEvenNumbers([1,3,9])', (done) => {
    should(getEvenNumbers([1,3,9])).eql([]);
    done();
  });        
});