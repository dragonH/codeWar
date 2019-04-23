const LCS = require('../5kyu - Longest Common Subsequence');
const should = require('should');

describe('5kyu - Longest Common Subsequence', () => {
  it('Should return "" for LCS("a", "b")', (done) => {
    should(LCS("a", "b")).equal('');
    done();
  });
  it('Should return "a" for LCS("a", "a")', (done) => {
    should(LCS("a", "a")).equal('a');
    done();
  });
  it('Should return "ac" for LCS("abc", "ac")', (done) => {
    should(LCS("abc", "ac")).equal('ac');
    done();
  });
  it('Should return "abc" for LCS("abcdef", "abc")', (done) => {
    should(LCS("abcdef", "abc")).equal('abc');
    done();
  });
  it('Should return "acf" for LCS("abcdef", "acf")', (done) => {
    should(LCS("abcdef", "acf")).equal('acf');
    done();
  });      
});