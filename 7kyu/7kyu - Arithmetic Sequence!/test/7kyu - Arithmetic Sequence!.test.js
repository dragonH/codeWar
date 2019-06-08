const nthterm = require('../7kyu - Arithmetic Sequence!');
const should = require('should');

describe('7kyu - Arithmetic Sequence!', () => {
  it('Should return 55 for nthterm(0,55,1)', (done) => {
    should(nthterm(0,55,1)).equal(55);
    done();
  });
  it('Should return 500 for nthterm(0,100,5)', (done) => {
    should(nthterm(0,100,5)).equal(500);
    done();
  });
  it('Should return 42 for nthterm(14,4,7)', (done) => {
    should(nthterm(14,4,7)).equal(42);
    done();
  });
  it('Should return 5050 for nthterm(10000,99,-50)', (done) => {
    should(nthterm(10000,99,-50)).equal(5050);
    done();
  });
  it('Should return 4500 for nthterm(10000,110,-50)', (done) => {
    should(nthterm(10000,110,-50)).equal(4500);
    done();
  });       
});