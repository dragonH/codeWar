const splitNumbers = require('../7kyu - Splitting Numbers');
const should = require('should');

describe('7kyu - Splitting Numbers', () => {
  it('Should return [33, 66] for splitNumbers(99)', (done) => {
    should(splitNumbers(99)).eql([33, 66]);
    done();
  });
  it('Should return [9, 36] for splitNumbers(45)', (done) => {
    should(splitNumbers(45)).eql([9, 36]);
    done();
  });
  it('Should return [18, 132] for splitNumbers(150)', (done) => {
    should(splitNumbers(150)).eql([18, 132]);
    done();
  });
  it('Should return [1285, 8714] for splitNumbers(9999)', (done) => {
    should(splitNumbers(9999)).eql([1285, 8714]);
    done();
  });      
});