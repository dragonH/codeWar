const menFromBoys = require('../7kyu - Sort Out The Men From Boys');
const should = require('should');

describe('7kyu - Sort Out The Men From Boys', () => {
  it('Should return [14,17,7,3] for menFromBoys([7,3,14,17])', (done) => {
    should(menFromBoys([7,3,14,17])).eql([14,17,7,3]);
    done();
  });
  it('Should return [2,90,95,43,37] for menFromBoys([2,43,95,90,37])', (done) => {
    should(menFromBoys([2,43,95,90,37])).eql([2,90,95,43,37]);
    done();
  });
  it('Should return [20,34,46,50,43,33] for menFromBoys([20,33,50,34,43,46])', (done) => {
    should(menFromBoys([20,33,50,34,43,46])).eql([20,34,46,50,43,33]);
    done();
  });
  it('Should return [72,76,82,100,91,85] for menFromBoys([82,91,72,76,76,100,85])', (done) => {
    should(menFromBoys([82,91,72,76,76,100,85])).eql([72,76,82,100,91,85]);
    done();
  });
  it('Should return [2,10,17,15,1] for menFromBoys([2,15,17,15,2,10,10,17,1,1])', (done) => {
    should(menFromBoys([2,15,17,15,2,10,10,17,1,1])).eql([2,10,17,15,1]);
    done();
  });       
});