const DNAStrand = require('../7kyu - Complementary DNA');
const should = require('should');

describe('7kyu - Complementary DNA', () => {
  it('Should return "TTTT" for DNAStrand("AAAA")', (done) => {
    should(DNAStrand("AAAA")).equal('TTTT');
    done();
  });
  it('Should return "CATA" for DNAStrand("GTAT")', (done) => {
    should(DNAStrand("GTAT")).equal('CATA');
    done();
  });
  it('Should return "TTCC" for DNAStrand("AAGG")', (done) => {
    should(DNAStrand("AAGG")).equal('TTCC');
    done();
  });
  it('Should return "TAACG" for DNAStrand("ATTGC")', (done) => {
    should(DNAStrand("ATTGC")).equal('TAACG');
    done();
  });
  it('Should return "CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT" for DNAStrand("GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA")', (done) => {
    should(DNAStrand("GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA")).equal('CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT');
    done();
  });     
});