const reverseList = require('../8kyu - Reverse List Order');
const should = require('should');

describe('8kyu - Reverse List Order', () => {
  it('Should return [4,3,2,1] for reverseList([1,2,3,4])', (done) => {
    should(reverseList([1,2,3,4])).eql([4,3,2,1]);
    done();
  });
  it('Should return [4,5,1,3] for reverseList([3,1,5,4])', (done) => {
    should(reverseList([3,1,5,4])).eql([4,5,1,3]);
    done();
  });
  it('Should return [2,9,6,3] for reverseList([3,6,9,2])', (done) => {
    should(reverseList([3,6,9,2])).eql([2,9,6,3]);
    done();
  });
  it('Should return [1] for reverseList([1])', (done) => {
    should(reverseList([1])).eql([1]);
    done();
  });      
});