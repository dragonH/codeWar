const per = require("../7kyu - Multiplicative Persistence... What's special about 277777788888899");
const should = require('should');

describe("7kyu - Multiplicative Persistence... What's special about 277777788888899", () => {
  it('Should return [0] for per(1234567890)', (done) => {
    should(per(1234567890)).eql([0]);
    done();
  });
  it('Should return [362880,0] for per(123456789)', (done) => {
    should(per(123456789)).eql([362880,0]);
    done();
  });
  it('Should return [40320,0] for per(12345678)', (done) => {
    should(per(12345678)).eql([40320,0]);
    done();
  }); 
  it('Should return [5040,0] for per(1234567)', (done) => {
    should(per(1234567)).eql([5040,0]);
    done();
  });
  it('Should return [720,0] for per(123456)', (done) => {
    should(per(123456)).eql([720,0]);
    done();
  });      
});