const triangle = require('../7kyu - Coloured Triangles');
const should = require('should');

describe('7kyu - Coloured Triangles', () => {
  it("Should return 'R' for triangle('GB')", (done) => {
    should(triangle('GB')).equal('R');
    done();
  });
  it("Should return 'R' for triangle('RRR')", (done) => {
    should(triangle('RRR')).equal('R');
    done();
  });
  it("Should return 'B' for triangle('RGBG')", (done) => {
    should(triangle('RGBG')).equal('B');
    done();
  });
  it("Should return 'G' for triangle('RBRGBRB')", (done) => {
    should(triangle('RBRGBRB')).equal('G');
    done();
  });
  it("Should return 'G' for triangle('RBRGBRBGGRRRBGBBBGG')", (done) => {
    should(triangle('RBRGBRBGGRRRBGBBBGG')).equal('G');
    done();
  });        
});