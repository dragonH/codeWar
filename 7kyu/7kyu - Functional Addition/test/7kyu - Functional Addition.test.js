const add = require('../7kyu - Functional Addition');
const should = require('should');

describe('7kyu - Functional Addition', () => {
  it('Should return 4 for add(1)(3)', (done) => {
    should(add(1)(3)).equal(4);
    done();
  });
  it('Should return -4 for add(1)(-5)', (done) => {
    should(add(1)(-5)).equal(-4);
    done();
  });
  it('Should return 23 for add(3)(20)', (done) => {
    should(add(3)(20)).equal(23);
    done();
  });    
});