const Counter = require("../7kyu - You Can't Code Under Pressure #2");
const should = require('should');

describe("7kyu - You Can't Code Under Pressure #2", () => {
  const myCounter = new Counter();
  it('Should return true for myCounter.check() === 0', (done) => {
    should(myCounter.check() === 0).equal(true);
    done();
  });
  it('Should return false for myCounter.check() === 1', (done) => {
    should(myCounter.check() === 1).equal(false);
    done();
  });
  it('Should return 1 for myCounter.increment()', (done) => {
    myCounter.increment();
    should(myCounter.counter).equal(1);
    done();
  });
  it('Should return 1 for myCounter.increment()', (done) => {
    myCounter.increment();
    should(myCounter.counter).equal(2);
    done();
  });      
});