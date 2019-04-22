const abbrevName = require('../8kyu - Abbreviate a Two Word Name');
const should = require('should');

describe('8kyu - Abbreviate a Two Word Name', () => {
  it('Should return "S.H" for abbrevName("Sam Harris")', (done) => {
    should(abbrevName("Sam Harris")).equal('S.H');
    done();
  });
  it('Should return "P.F" for abbrevName("Sam Harris")', (done) => {
    should(abbrevName("Patrick Feenan")).equal('P.F');
    done();
  });
  it('Should return "E.C" for abbrevName("Evan Cole")', (done) => {
    should(abbrevName("Evan Cole")).equal('E.C');
    done();
  });
  it('Should return "P.F" for abbrevName("P Favuzzi")', (done) => {
    should(abbrevName("P Favuzzi")).equal('P.F');
    done();
  });
  it('Should return "D.M" for abbrevName("David Mendieta")', (done) => {
    should(abbrevName("David Mendieta")).equal('D.M');
    done();
  });        
});