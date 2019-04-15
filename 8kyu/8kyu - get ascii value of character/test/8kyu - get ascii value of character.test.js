const getASCII = require('../8kyu - get ascii value of character');
const should = require('should');

describe('8kyu - get ascii value of character', () => {
  it('Should return 65 for getASCII("A")', (done) => {
    should(getASCII("A")).equal(65);
    done();
  });
  it('Should return 66 for getASCII("B")', (done) => {
    should(getASCII("B")).equal(66);
    done();
  });
  it('Should return 69 for getASCII("E")', (done) => {
    should(getASCII("E")).equal(69);
    done();
  });
  it('Should return 70 for getASCII("F")', (done) => {
    should(getASCII("F")).equal(70);
    done();
  });
  it('Should return 71 for getASCII("G")', (done) => {
    should(getASCII("G")).equal(71);
    done();
  });       
});