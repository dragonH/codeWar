
const maskify = require('../7kyu - Credit Card Mask');
const should = require('should');
describe('7kyu - Credit Card Mask', () => {
  it('shoule return "############5616" for "4556364607935616"', (done) => {
    maskify('4556364607935616').should.equal('############5616');
    done();
  });
  it('shoule return "#######5616" for "64607935616"', (done) => {
    maskify('64607935616').should.equal('#######5616');
    done();
  });
  it('shoule return "1" for "1"', (done) => {
    maskify('1').should.equal('1');
    done();
  });
});