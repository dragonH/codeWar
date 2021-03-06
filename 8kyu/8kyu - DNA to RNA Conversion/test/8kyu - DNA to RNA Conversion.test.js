const DNAtoRNA = require('../8kyu - DNA to RNA Conversion');
const should = require('should');

describe('8kyu - DNA to RNA Conversion', () => {
  it('Should return "UUUU" for DNAtoRNA("TTTT")', (done) => {
    should(DNAtoRNA("TTTT")).equal('UUUU');
    done();
  });
  it('Should return "GACCGCCGCC" for DNAtoRNA("GACCGCCGCC")', (done) => {
    should(DNAtoRNA("GACCGCCGCC")).equal('GACCGCCGCC');
    done();
  });
  it('Should return "GAUUCCACCGACUUCCCAAGUACCGGAAGCGCGACCAACUCGCACAGC" for DNAtoRNA("GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC")', (done) => {
    should(DNAtoRNA("GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC")).equal('GAUUCCACCGACUUCCCAAGUACCGGAAGCGCGACCAACUCGCACAGC');
    done();
  });
  it('Should return "GAAGCUUAUCCGUUCCUGAAGGCUGUGGCAUCCUCUAAAUCAGACUUGGCUACGCCGUUAGCCGAGGGCUUAGCGUUGAGUGUCAUUAUAUACGCGGCCUGCGACCUGGCCACACAAUGCCCUCGAAAAUUUUUCUUUCGGUUAUACGAGUUGCGAAACCUUUCGCGCGUAGACGAAGAAUUUGAAGUGGCCUACACCGUUUGGAAAGCCGUUCUCAUUAGAAUGGUACCGACUACUCGGCUCGGAGUCAUUGUAUAGGGAGAGUGUCGUAUCAACAUCACACACUUUUAGCAUUUAAGGUCCAUGGCCGUUGACAGGUACCGA" for DNAtoRNA("GAAGCTTATCCGTTCCTGAAGGCTGTGGCATCCTCTAAATCAGACTTGGCTACGCCGTTAGCCGAGGGCTTAGCGTTGAGTGTCATTATATACGCGGCCTGCGACCTGGCCACACAATGCCCTCGAAAATTTTTCTTTCGGTTATACGAGTTGCGAAACCTTTCGCGCGTAGACGAAGAATTTGAAGTGGCCTACACCGTTTGGAAAGCCGTTCTCATTAGAATGGTACCGACTACTCGGCTCGGAGTCATTGTATAGGGAGAGTGTCGTATCAACATCACACACTTTTAGCATTTAAGGTCCATGGCCGTTGACAGGTACCGA")', (done) => {
    should(DNAtoRNA("GAAGCTTATCCGTTCCTGAAGGCTGTGGCATCCTCTAAATCAGACTTGGCTACGCCGTTAGCCGAGGGCTTAGCGTTGAGTGTCATTATATACGCGGCCTGCGACCTGGCCACACAATGCCCTCGAAAATTTTTCTTTCGGTTATACGAGTTGCGAAACCTTTCGCGCGTAGACGAAGAATTTGAAGTGGCCTACACCGTTTGGAAAGCCGTTCTCATTAGAATGGTACCGACTACTCGGCTCGGAGTCATTGTATAGGGAGAGTGTCGTATCAACATCACACACTTTTAGCATTTAAGGTCCATGGCCGTTGACAGGTACCGA")).equal('GAAGCUUAUCCGUUCCUGAAGGCUGUGGCAUCCUCUAAAUCAGACUUGGCUACGCCGUUAGCCGAGGGCUUAGCGUUGAGUGUCAUUAUAUACGCGGCCUGCGACCUGGCCACACAAUGCCCUCGAAAAUUUUUCUUUCGGUUAUACGAGUUGCGAAACCUUUCGCGCGUAGACGAAGAAUUUGAAGUGGCCUACACCGUUUGGAAAGCCGUUCUCAUUAGAAUGGUACCGACUACUCGGCUCGGAGUCAUUGUAUAGGGAGAGUGUCGUAUCAACAUCACACACUUUUAGCAUUUAAGGUCCAUGGCCGUUGACAGGUACCGA');
    done();
  });
  it('Should return "AACCCUGUCCACCAGUAACGUAGGCCGACGGGAAAAAUAAACGAUCUGUCAAUG" for DNAtoRNA("AACCCTGTCCACCAGTAACGTAGGCCGACGGGAAAAATAAACGATCTGTCAATG")', (done) => {
    should(DNAtoRNA("AACCCTGTCCACCAGTAACGTAGGCCGACGGGAAAAATAAACGATCTGTCAATG")).equal('AACCCUGUCCACCAGUAACGUAGGCCGACGGGAAAAAUAAACGAUCUGUCAAUG');
    done();
  });        
});