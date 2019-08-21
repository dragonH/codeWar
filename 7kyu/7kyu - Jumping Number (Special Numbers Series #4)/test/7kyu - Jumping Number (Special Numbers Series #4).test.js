const jumpingNumber = require('../7kyu - Jumping Number (Special Numbers Series #4)');
const should = require('should');

describe('7kyu - Jumping Number (Special Numbers Series #4)', () => {
  it('Should return "Jumping!!" for jumpingNumber(1)', (done) => {
    should(jumpingNumber(1)).equal('Jumping!!');
    done();
  });
  it('Should return "Jumping!!" for jumpingNumber(7)', (done) => {
    should(jumpingNumber(7)).equal('Jumping!!');
    done();
  }); 
  it('Should return "Jumping!!" for jumpingNumber(9)', (done) => {
    should(jumpingNumber(9)).equal('Jumping!!');
    done();
  }); 
  it('Should return "Jumping!!" for jumpingNumber(23)', (done) => {
    should(jumpingNumber(23)).equal('Jumping!!');
    done();
  });   
  it('Should return "Jumping!!" for jumpingNumber(32)', (done) => {
    should(jumpingNumber(32)).equal('Jumping!!');
    done();
  });       
});