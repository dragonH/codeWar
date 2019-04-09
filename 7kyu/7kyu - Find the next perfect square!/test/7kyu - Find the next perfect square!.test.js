const findNextSquare = require('../7kyu - Find the next perfect square!');
const should = require('should');

describe('7kyu - Find the next perfect square!', () => {
  it('should return 144 for findNextSquare(121)', (done) => {
    findNextSquare(121).should.be.equal(144);
    done();
  });
  it('should return 676 for findNextSquare(625)', (done) => {
    findNextSquare(625).should.be.equal(676);
    done();
  });
  it('should return 15241630849 for findNextSquare(15241383936)', (done) => {
    findNextSquare(15241383936).should.be.equal(15241630849);
    done();
  });  
  it('should return -1 for findNextSquare(342786627)', (done) => {
    findNextSquare(342786627).should.be.equal(-1);
    done();
  });  
  it('should return -1 for findNextSquare(155)', (done) => {
    findNextSquare(155).should.be.equal(-1);
    done();
  });  
});