const presents = require('../7kyu - Presents');
const should = require('should');

describe('7kyu - Presents', () => {
  it('Should return [4,1,2,3] for presents([2,3,4,1])', (done) => {
    should(presents([2,3,4,1])).eql([4,1,2,3]);
    done();
  });
  it('Should return [1,3,2] for presents([1,3,2])', (done) => {
    should(presents([1,3,2])).eql([1,3,2]);
    done();
  });
  it('Should return [1,2] for presents([1,2])', (done) => {
    should(presents([1,2])).eql([1,2]);
    done();
  });
  it('Should return [1] for presents([1])', (done) => {
    should(presents([1])).eql([1]);
    done();
  });
  it('Should return [9,7,5,1,4,3,8,2,6] for presents([4,8,6,5,3,9,2,7,1])', (done) => {
    should(presents([4,8,6,5,3,9,2,7,1])).eql([9,7,5,1,4,3,8,2,6]);
    done();
  });        
});