const compose = require('../7kyu - Composing squared strings');
const should = require('should');

describe('7kyu - Composing squared strings', () => {
  it('Should return "bNkTB\nhTrWO\nRTFVi\nCnnIj" for compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB")', (done) => {
    should(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB")).equal('bNkTB\nhTrWO\nRTFVi\nCnnIj');
    done();
  });
  it('Should return "HgYPW\nTGGbM\nIPhqt\nuUMDH" for compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW")', (done) => {
    should(compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW")).equal('HgYPW\nTGGbM\nIPhqt\nuUMDH');
    done();
  });
  it('Should return "tzlYf\nOOmYF\nsqPEZ\nxMkBh" for compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf")', (done) => {
    should(compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf")).equal('tzlYf\nOOmYF\nsqPEZ\nxMkBh');
    done();
  });
  it('Should return "fmO\nlrK" for compose("fn\nlr", "Kz\nmO")', (done) => {
    should(compose("fn\nlr", "Kz\nmO")).equal('fmO\nlrK');
    done();
  });
  it('Should return "fuOPhSJ\nBCwSAjZ\nZKGFutq\nbhHoTzQ\nUjyNSLQ\nPCOiuMe" for compose("fctRKq\nBCorKQ\nZKGbDO\nbhHohe\nUjyNSg\nPCOiuM",   "elSYAB\nLQMYuN\nTzQtaM\nFutqip\nwSAjZX\nuOPhSJ")', (done) => {
    should(compose("fctRKq\nBCorKQ\nZKGbDO\nbhHohe\nUjyNSg\nPCOiuM", 
    "elSYAB\nLQMYuN\nTzQtaM\nFutqip\nwSAjZX\nuOPhSJ")).equal('fuOPhSJ\nBCwSAjZ\nZKGFutq\nbhHoTzQ\nUjyNSLQ\nPCOiuMe');
    done();
  });        
});