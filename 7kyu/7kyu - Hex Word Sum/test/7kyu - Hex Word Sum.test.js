const hexWordSum = require('../7kyu - Hex Word Sum');
const should = require('should');

describe('7kyu - Hex Word Sum', () => {
  it("Should return 14613198 for hexWordSum('DEFACE')", (done) => {
    should(hexWordSum('DEFACE')).equal(14613198);
    done();
  });
  it("Should return 23294 for hexWordSum('SAFE')", (done) => {
    should(hexWordSum('SAFE')).equal(23294);
    done();
  });
  it("Should return 49374 for hexWordSum('CODE')", (done) => {
    should(hexWordSum('CODE')).equal(49374);
    done();
  });
  it("Should return 0 for hexWordSum('BUGS')", (done) => {
    should(hexWordSum('BUGS')).equal(0);
    done();
  });
  it("Should return 0 for hexWordSum('')", (done) => {
    should(hexWordSum('')).equal(0);
    done();
  });        
});