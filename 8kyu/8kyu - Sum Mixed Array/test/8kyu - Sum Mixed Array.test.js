const sumMix = require('../8kyu - Sum Mixed Array');
const should = require('should');

describe('8kyu - Sum Mixed Array', () => {
  it("Should return 22 for sumMix([9, 3, '7', '3'])", (done) => {
    should(sumMix([9, 3, '7', '3'])).equal(22);
    done();
  });
  it("Should return 42 for sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])", (done) => {
    should(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).equal(42);
    done();
  });
  it("Should return 41 for sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])", (done) => {
    should(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])).equal(41);
    done();
  });
  it("Should return 45 for sumMix(['1', '5', '8', 8, 9, 9, 2, '3'])", (done) => {
    should(sumMix(['1', '5', '8', 8, 9, 9, 2, '3'])).equal(45);
    done();
  });
  it("Should return 61 for sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7])", (done) => {
    should(sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7])).equal(61);
    done();
  });        
});