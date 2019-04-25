const nbYear = require('../7kyu - Growth of a Population');
const should = require('should');

describe('7kyu - Growth of a Population', () => {
  it('Should return 15 for nbYear(1500, 5, 100, 5000)', (done) => {
    should(nbYear(1500, 5, 100, 5000)).equal(15);
    done();
  });
  it('Should return 10 for nbYear(1500000, 2.5, 10000, 2000000)', (done) => {
    should(nbYear(1500000, 2.5, 10000, 2000000)).equal(10);
    done();
  });
  it('Should return 94 for nbYear(1500000, 0.25, 1000, 2000000)', (done) => {
    should(nbYear(1500000, 0.25, 1000, 2000000)).equal(94);
    done();
  });
  it('Should return 151 for nbYear(1500000, 0.25, -1000, 2000000)', (done) => {
    should(nbYear(1500000, 0.25, -1000, 2000000)).equal(151);
    done();
  });
  it('Should return 116 for nbYear(1500000, 0.25, 1, 2000000)', (done) => {
    should(nbYear(1500000, 0.25, 1, 2000000)).equal(116);
    done();
  });       
});