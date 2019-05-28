const replicate = require('../7kyu - Recursive Replication');
const should = require('should');

describe('7kyu - Recursive Replication', () => {
  it('Should return [5,5,5] for replicate(3, 5)', (done) => {
    should(replicate(3, 5)).eql([5,5,5]);
    done();
  });
  it('Should not use loop', (done) => {
    should(replicate.toString()).not.match(/for|while/i);
    done();
  });
  it('Should return [4,4,4,4] for replicate(4, 4)', (done) => {
    should(replicate(4, 4)).eql([4,4,4,4]);
    done();
  });
  it('Should return [1,1,1,1,1] for replicate(5, 1)', (done) => {
    should(replicate(5, 1)).eql([1,1,1,1,1]);
    done();
  });      
});