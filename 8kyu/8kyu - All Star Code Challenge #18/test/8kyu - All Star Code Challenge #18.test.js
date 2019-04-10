const strCount = require('../8kyu - All Star Code Challenge #18');
const should = require('should');

describe('8kyu - All Star Code Challenge #18', () => {
  it("Should return 1 for strCount('Hello', 'o')", (done) => {
    should(strCount('Hello', 'o')).equal(1);
    done();
  });
  it("Should return 2 for strCount('Hello', 'l')", (done) => {
    should(strCount('Hello', 'l')).equal(2);
    done();
  });
  it("Should return 0 for strCount('ww234n', 'z')", (done) => {
    should(strCount('ww234n', 'z')).equal(0);
    done();
  });
  it("Should return 0 for strCount('', 'k')", (done) => {
    should(strCount('', 'k')).equal(0);
    done();
  });
  it("Should return 1 for strCount('abcedfghijklmnopqrstuvwxyz', 'z')", (done) => {
    should(strCount('abcedfghijklmnopqrstuvwxyz', 'z')).equal(1);
    done();
  });        
});