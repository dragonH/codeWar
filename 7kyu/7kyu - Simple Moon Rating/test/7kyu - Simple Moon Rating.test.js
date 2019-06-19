const moonRating = require('../7kyu - Simple Moon Rating');
const should = require('should');

describe('7kyu - Simple Moon Rating', () => {
  it('Should return cxxxx for moonRating(0.5)', (done) => {
    should(moonRating(0.5)).equal('cxxxx');
    done();
  });
  it('Should return oooox for moonRating(7.5)', (done) => {
    should(moonRating(7.5)).equal('oooox');
    done();
  });
  it('Should return ooxxx for moonRating(3.8)', (done) => {
    should(moonRating(3.8)).equal('ooxxx');
    done();
  });
  it('Should return oooox for moonRating(7.9)', (done) => {
    should(moonRating(7.9)).equal('oooox');
    done();
  });
  it('Should return ocxxx for moonRating(3.1)', (done) => {
    should(moonRating(3.1)).equal('ocxxx');
    done();
  });        
});