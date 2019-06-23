const divisibleByThree = require('../7kyu - By 3 or not by 3 That is the question');
const should = require('should');

describe('7kyu - By 3 or not by 3 That is the question', () => {
  it("Should return true for divisibleByThree('123')", (done) => {
    should(divisibleByThree('123')).equal(true);
    done();
  });
  it("Should return true for divisibleByThree('19254')", (done) => {
    should(divisibleByThree('19254')).equal(true);
    done();
  });
  it("Should return false for divisibleByThree('1')", (done) => {
    should(divisibleByThree('1')).equal(false);
    done();
  }); 
  it("Should return true for divisibleByThree('963210456')", (done) => {
    should(divisibleByThree('963210456')).equal(true);
    done();
  });
  it("Should return false for divisibleByThree('010110101011')", (done) => {
    should(divisibleByThree('010110101011')).equal(false);
    done();
  });       
});