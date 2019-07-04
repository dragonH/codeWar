const asteriscIt = require('../7kyu - Asterisk it');
const should = require('should');

describe('7kyu - Asterisk it', () => {
  it('Should return "531270*8" for asteriscIt(5312708)', (done) => {
    should(asteriscIt(5312708)).equal('531270*8');
    done();
  });
  it('Should return "96*8*2135" for asteriscIt(9682135)', (done) => {
    should(asteriscIt(9682135)).equal('96*8*2135');
    done();
  });
  it('Should return "2*2*2*2" for asteriscIt(2222)', (done) => {
    should(asteriscIt(2222)).equal('2*2*2*2');
    done();
  });
  it('Should return "1111" for asteriscIt(1111)', (done) => {
    should(asteriscIt(1111)).equal('1111');
    done();
  });
  it('Should return "14*6*4*6*8*67231" for asteriscIt([1, 4, 64, 68, 67, 23, 1])', (done) => {
    should(asteriscIt([1, 4, 64, 68, 67, 23, 1])).equal('14*6*4*6*8*67231');
    done();
  });        
});