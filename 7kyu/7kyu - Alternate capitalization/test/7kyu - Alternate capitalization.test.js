const capitalize = require('../7kyu - Alternate capitalization');
const should = require('should');

describe('7kyu - Alternate capitalization', () => {
  it("Should return ['AbCdEf', 'aBcDeF'] for capitalize('abcdef')", (done) => {
    should(capitalize("abcdef")).eqls(['AbCdEf', 'aBcDeF']);
    done();
  });
  it("Should return ['CoDeWaRs', 'cOdEwArS'] for capitalize('codewars')", (done) => {
    should(capitalize("codewars")).eqls(['CoDeWaRs', 'cOdEwArS']);
    done();
  });  
  it("Should return ['AbRaCaDaBrA', 'aBrAcAdAbRa'] for capitalize('abracadabra')", (done) => {
    should(capitalize("abracadabra")).eqls(['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    done();
  });    
  it("Should return ['CoDeWaRrIoRs', 'cOdEwArRiOrS'] for capitalize('codewarriors')", (done) => {
    should(capitalize("codewarriors")).eqls(['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
    done();
  });   
  it("Should return ['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs'] for capitalize('indexinglessons')", (done) => {
    should(capitalize("indexinglessons")).eqls(['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs']);
    done();
  });     
});