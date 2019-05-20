const ultimateReverse = require('../7kyu - Ultimate Array Reverser');
const should = require('should');

describe('7kyu - Ultimate Array Reverser', () => {
  it('Should return ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"] for ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"])', (done) => {
    should(ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"])).eql(["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]);
    done();
  });
  it('Should return ["How", "many", "shrimp", "do", "you", "have", "to", "eat", "before", "your", "skin", "starts", "to", "turn", "pink?"] for ultimateReverse(["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer", "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"])', (done) => {
    should(ultimateReverse(["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer", "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"])).eql(["How", "many", "shrimp", "do", "you", "have", "to", "eat", "before", "your", "skin", "starts", "to", "turn", "pink?"]);
    done();
  });
  it('Should return ["b", "a", ""] for ultimateReverse(["a", "b", ""])', (done) => {
    should(ultimateReverse(["a", "b", ""])).eql(["b", "a", ""]);
    done();
  });    
});