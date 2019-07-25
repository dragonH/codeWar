const sumOfABeach = require('../7kyu - Sum of a Beach');
const should = require('should');

describe('7kyu - Sum of a Beach', () => {
  it('Should return 1 for sumOfABeach("WAtErSlIde")', (done) => {
    should(sumOfABeach("WAtErSlIde")).equal(1);
    done();
  });
  it('Should return 3 for sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")', (done) => {
    should(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")).equal(3);
    done();
  });
  it('Should return 4 for sumOfABeach("gOfIshsunesunFiSh")', (done) => {
    should(sumOfABeach("gOfIshsunesunFiSh")).equal(4);
    done();
  });
  it('Should return 0 for sumOfABeach("cItYTowNcARShoW")', (done) => {
    should(sumOfABeach("cItYTowNcARShoW")).equal(0);
    done();
  });
  it('Should return 1 for sumOfABeach("123FISH321")', (done) => {
    should(sumOfABeach("123FISH321")).equal(1);
    done();
  });        
});