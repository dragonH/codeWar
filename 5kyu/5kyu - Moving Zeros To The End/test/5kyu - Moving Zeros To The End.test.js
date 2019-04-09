const moveZeros = require('../5kyu - Moving Zeros To The End');
const should = require('should');
describe('5kyu - Moving Zeros To The End', () => {
  it('should return [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ] for moveZeros([1,2,0,1,0,1,0,3,0,1])', (done) => {
    moveZeros([1,2,0,1,0,1,0,3,0,1]).should.eql([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]);
    done();
  });
  it('should return [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0] for moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9])', (done) => {
    moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]).should.eql([9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]);
    done();
  });  
  it('should return ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0] for moveZeros(["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])', (done) => {
    moveZeros(["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]).should.eql(["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]);
    done();
  });  
});
