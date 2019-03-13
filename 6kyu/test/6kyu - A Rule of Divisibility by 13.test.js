const thirt = require('../6kyu - A Rule of Divisibility by 13');
const should = require('should');

describe('6kyu - A Rule of Divisibility by 13', () => {
  it('it should return 79 for thirt(8529)', (done) => {
    thirt(8529).should.equal(79);
    done();
  });
  it('it should return 31 for thirt(85299258)', (done) => {
    thirt(85299258).should.equal(31);
    done();
  });
  it('it should return 57 for thirt(5634)', (done) => {
    thirt(5634).should.equal(57);
    done();
  });
  it('it should return 71 for thirt(1111111111)', (done) => {
    thirt(1111111111).should.equal(71);
    done();
  });
  it('it should return 30 for thirt(987654321)', (done) => {
    thirt(987654321).should.equal(30);
    done();
  });  
});