const sumOrProduct = require('../7kyu - Larger Product or Sum');
const should = require('should');

describe('7kyu - Larger Product or Sum', () => {
  it('Should return "sum" for sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)', (done) => {
    should(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).equal('sum');
    done();
  });
  it('Should return "product" for sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)', (done) => {
    should(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)).equal('product');
    done();
  });
  it('Should return "same" for sumOrProduct([10, 20, 3, 30, 5, 4], 3)', (done) => {
    should(sumOrProduct([10, 20, 3, 30, 5, 4], 3)).equal('same');
    done();
  });
  it('Should return "sum" for sumOrProduct([23, 7, 12, 9, 12, 17, 3, 8, 5, 2, 23], 3)', (done) => {
    should(sumOrProduct([23, 7, 12, 9, 12, 17, 3, 8, 5, 2, 23], 3)).equal('sum');
    done();
  });
  it('Should return "product" for sumOrProduct([13, 8, 22, 39, 12, 6, 14, 19, 4, 7, 33], 4)', (done) => {
    should(sumOrProduct([13, 8, 22, 39, 12, 6, 14, 19, 4, 7, 33], 4)).equal('product');
    done();
  });       
});