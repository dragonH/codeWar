const reverseSeq = require('../8kyu - Reversed sequence');
const should = require('should');

describe('8kyu - Reversed sequence', () => {
  it('Should return "[5, 4, 3, 2, 1]" for reverseSeq(5)', (done) => {
    should(reverseSeq(5)).eql([5, 4, 3, 2, 1]);
    done();
  });
  it('Should return "[6, 5, 4, 3, 2, 1]" for reverseSeq(6)', (done) => {
    should(reverseSeq(6)).eql([6, 5, 4, 3, 2, 1]);
    done();
  });
  it('Should return "[100, 99, 98, ...,2, 1]" for reverseSeq(100)', (done) => {
    should(reverseSeq(100)).eql(new Array(100).fill(0).map((_, i) => 100 - i));
    done();
  });
  it('Should return "[10000, 9999, 9998, ...,2, 1]" for reverseSeq(10000)', (done) => {
    should(reverseSeq(10000)).eql(new Array(10000).fill(0).map((_, i) => 10000 - i));
    done();
  });      
});