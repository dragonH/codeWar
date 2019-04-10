const boolToWord  = require("../8kyu - Convert boolean values to strings 'Yes' or 'No'");
const should = require('should');

describe("8kyu - Convert boolean values to strings 'Yes' or 'No'.", () => {
  it('Should return "Yes" for boolToWord(true)', (done) => {
    should(boolToWord(true)).equal('Yes');
    done();
  });
  it('Should return "No" for boolToWord(false)', (done) => {
    should(boolToWord(false)).equal('No');
    done();
  });
  it('Should return "Yes" for boolToWord(0<1)', (done) => {
    should(boolToWord(0<1)).equal('Yes');
    done();
  });
  it('Should return "Yes" for boolToWord(!0)', (done) => {
    should(boolToWord(!0)).equal('Yes');
    done();
  });
  it('Should return "No" for boolToWord(!1)', (done) => {
    should(boolToWord(!1)).equal('No');
    done();
  });       
});