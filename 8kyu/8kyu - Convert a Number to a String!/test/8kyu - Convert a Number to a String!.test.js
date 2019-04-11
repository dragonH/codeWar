const numberToString = require('../8kyu - Convert a Number to a String!');
const should = require('should');

describe('8kyu - Convert a Number to a String!', () => {
  it('Should return "67" for numberToString(67)', (done) => {
    should(numberToString(67)).equal('67');
    done();
  });
  it('Should return "79585" for numberToString(79585)', (done) => {
    should(numberToString(79585)).equal('79585');
    done();
  });
  it('Should return "39652" for numberToString(39652)', (done) => {
    should(numberToString(39652)).equal('39652');
    done();
  });
  it('Should return "3" for numberToString(1 + 2)', (done) => {
    should(numberToString(1 + 2)).equal('3');
    done();
  });
  it('Should return "-1" for numberToString(1 - 2)', (done) => {
    should(numberToString(1 - 2)).equal('-1');
    done();
  });    
});