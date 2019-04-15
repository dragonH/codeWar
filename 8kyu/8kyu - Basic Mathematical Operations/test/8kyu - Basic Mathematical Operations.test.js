const basicOp = require('../8kyu - Basic Mathematical Operations');
const should = require('should');

describe('8kyu - Basic Mathematical Operations', () => {
  it("Should return 11 for basicOp('+', 4, 7)", (done) => {
    should(basicOp('+', 4, 7)).equal(11);
    done();
  });
  it("Should return -3 for basicOp('-', 15, 18)", (done) => {
    should(basicOp('-', 15, 18)).equal(-3);
    done();
  });
  it("Should return 25 for basicOp('*', 5, 5)", (done) => {
    should(basicOp('*', 5, 5)).equal(25);
    done();
  });
  it("Should return 7 for basicOp('/', 49, 7)", (done) => {
    should(basicOp('/', 49, 7)).equal(7);
    done();
  });      
});
