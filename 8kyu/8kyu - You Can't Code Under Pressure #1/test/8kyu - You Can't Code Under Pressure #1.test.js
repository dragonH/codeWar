const doubleInteger = require("../8kyu - You Can't Code Under Pressure #1");
const should = require('should');

describe("8kyu - You Can't Code Under Pressure #1", () => {
  it('Should return 4 for doubleInteger(2)', (done) => {
    should(doubleInteger(2)).equal(4);
    done();
  });
  it('Should return 8 for doubleInteger(4)', (done) => {
    should(doubleInteger(4)).equal(8);
    done();
  });
  it('Should return -20 for doubleInteger(-10)', (done) => {
    should(doubleInteger(-10)).equal(-20);
    done();
  });
  it('Should return 0 for doubleInteger(0)', (done) => {
    should(doubleInteger(0)).equal(0);
    done();
  });
  it('Should return 200 for doubleInteger(100)', (done) => {
    should(doubleInteger(100)).equal(200);
    done();
  });        
});