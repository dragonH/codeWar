const addBinary = require('../7kyu - Binary Addition');
const should = require('should');
describe('7kyu - Binary Addition.test', () => {
  it('should return \'11\' for addBinary(1, 2)', (done) => {
    addBinary(1, 2).should.equal('11');
    done();
  });
  it('should return \'111111\' for addBinary(51, 12)', (done) => {
    addBinary(51, 12).should.equal('111111');
    done();
  });  
  it('should return \'1100100\' for addBinary(100, 0)', (done) => {
    addBinary(100, 0).should.equal('1100100');
    done();
  });  
});