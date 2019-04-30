const printerError = require('../7kyu - Printer Errors');
const should = require('should');

describe('7kyu - Printer Errors', () => {
  it('Should return "3/56" for printerError(s)', (done) => {
    const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
    should(printerError(s)).equal('3/56');
    done();
  });
  it('Should return "6/60" for printerError(s)', (done) => {
    const s = 'kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
    should(printerError(s)).equal('6/60');
    done();
  });
  it('Should return "11/65" for printerError(s)', (done) => {
    const s = 'kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu';
    should(printerError(s)).equal('11/65');
    done();
  });
  it('Should return "0/53" for printerError(s)', (done) => {
    const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm';
    should(printerError(s)).equal('0/53');
    done();
  });      
});