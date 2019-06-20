const containAllRots = require('../7kyu - All Inclusive');
const should = require('should');

describe('7kyu - All Inclusive', () => {
  it('Should return true for containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])', (done) => {
    should(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])).equal(true);
    done();
  });
  it('Should return false for containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"])', (done) => {
    should(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"])).equal(false);
    done();
  });
  it('Should return true for containAllRots("QJAhQmS", ["hQmSQJA", "QJAhQmS", "QmSQJAh", "yUgUXoQE", "AhQmSQJ", "mSQJAhQ", "SQJAhQm", "JAhQmSQ"])', (done) => {
    should(containAllRots("QJAhQmS", ["hQmSQJA", "QJAhQmS", "QmSQJAh", "yUgUXoQE", "AhQmSQJ", "mSQJAhQ", "SQJAhQm", "JAhQmSQ"])).equal(true);
    done();
  }); 
  it('Should return false for containAllRots("Etsshp", ["nVOETcaxdvuk", "shpEts", "hpEtss", "Etsshp", "OuIiQ", "sXrDdPXIaW", "tsshpE", "pEtssh"])', (done) => {
    should(containAllRots("Etsshp", ["nVOETcaxdvuk", "shpEts", "hpEtss", "Etsshp", "OuIiQ", "sXrDdPXIaW", "tsshpE", "pEtssh"])).equal(false);
    done();
  }); 
  it('Should return false for containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl"])', (done) => {
    should(containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl"])).equal(false);
    done();
  });      
});