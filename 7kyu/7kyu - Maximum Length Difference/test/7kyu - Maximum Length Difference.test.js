const mxdiflg = require('../7kyu - Maximum Length Difference');
const should = require('should');

describe('7kyu - Maximum Length Difference', () => {
  it('Should return 13 for mxdiflg(s1, s2)', (done) => {
    const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
    const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    should(mxdiflg(s1, s2)).equal(13);
    done();
  });
  it('Should return 10 for mxdiflg(s1, s2)', (done) => {
    const s1 = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"];
    const s2 = ["bbbaaayddqbbrrrv"];
    should(mxdiflg(s1, s2)).equal(10);
    done();
  });
  it('Should return 14 for mxdiflg(s1, s2)', (done) => {
    const s1 = ["ccct", "tkkeeeyy", "ggiikffsszzoo", "nnngssddu", "rrllccqqqqwuuurdd", "kkbbddaakkk"];
    const s2 = ["tttxxxxxxgiiyyy", "ooorcvvj", "yzzzhhhfffaaavvvpp", "jjvvvqqllgaaannn", "tttooo", "qmmzzbhhbb"];
    should(mxdiflg(s1, s2)).equal(14);
    done();
  });
  it('Should return -1 for mxdiflg(s1, s2)', (done) => {
    const s1 = [];
    const s2 = [];
    should(mxdiflg(s1, s2)).equal(-1);
    done();
  });
  it('Should return -1 for mxdiflg(s1, s2)', (done) => {
    const s2 = [];
    const s1 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    should(mxdiflg(s1, s2)).equal(-1);
    done();
  });      
});