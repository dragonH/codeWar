const reverseWords = require('../7kyu - Reverse words');
const should = require('should');

describe('7kyu - Reverse words', () => {
  it("Should return 'ehT kciuq nworb xof spmuj revo eht yzal .god' for reverseWords('The quick brown fox jumps over the lazy dog.')", (done) => {
    should(reverseWords('The quick brown fox jumps over the lazy dog.')).equal('ehT kciuq nworb xof spmuj revo eht yzal .god');
    done();
  });
  it("Should return 'elppa' for reverseWords('apple')", (done) => {
    should(reverseWords('apple')).equal('elppa');
    done();
  });
  it("Should return 'a b c d' for reverseWords('a b c d')", (done) => {
    should(reverseWords('a b c d')).equal('a b c d');
    done();
  });
  it("Should return 'elbuod  decaps  sdrow' for reverseWords('double  spaced  words')", (done) => {
    should(reverseWords('double  spaced  words')).equal('elbuod  decaps  sdrow');
    done();
  }); 
  it("Should return 'desserts stressed' for reverseWords('stressed desserts')", (done) => {
    should(reverseWords('stressed desserts')).equal('desserts stressed');
    done();
  });       
});