const solve = require('../7kyu - Consecutive letters');
const should = require('should');

describe('7kyu - Consecutive letters', () => {
  it('Should return true for solve("abc")', (done) => {
    should(solve("abc")).equal(true);
    done();
  });
  it('Should return false for solve("abd")', (done) => {
    should(solve("abd")).equal(false);
    done();
  });
  it('Should return true for solve("dabc")', (done) => {
    should(solve("dabc")).equal(true);
    done();
  });
  it('Should return false for solve("abbc")', (done) => {
    should(solve("abbc")).equal(false);
    done();
  });      
});