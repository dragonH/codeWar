const isSquare = require("../7kyu - You're a square!");
const should = require('should');

describe("7kyu - You're a square!", () => {
  it("Should return false for isSquare(-1)", (done) => {
    should(isSquare(-1)).equal(false);
    done();
  });
  it("Should return true for isSquare(0)", (done) => {
    should(isSquare(0)).equal(true);
    done();
  });  
  it("Should return false for isSquare(3)", (done) => {
    should(isSquare(3)).equal(false);
    done();
  });
  it("Should return true for isSquare(4)", (done) => {
    should(isSquare(4)).equal(true);
    done();
  }); 
  it("Should return true for isSquare(25)", (done) => {
    should(isSquare(25)).equal(true);
    done();
  });        
});