const descendingOrder = require('../7kyu - Descending Order');
const should = require('should');

describe('7kyu - Descending Order', () => {
  it('Should return 0 for descendingOrder(0)', (done) => {
    should(descendingOrder(0)).equal(0);
    done();
  });
  it('Should return 1 for descendingOrder(1)', (done) => {
    should(descendingOrder(1)).equal(1);
    done();
  });
  it('Should return 111 for descendingOrder(111)', (done) => {
    should(descendingOrder(111)).equal(111);
    done();
  }); 
  it('Should return 15 for descendingOrder(51)', (done) => {
    should(descendingOrder(15)).equal(51);
    done();
  });
  it('Should return 1021 for descendingOrder(2110)', (done) => {
    should(descendingOrder(1021)).equal(2110);
    done();
  });       
});