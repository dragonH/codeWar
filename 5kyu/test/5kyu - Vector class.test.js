const Vector = require('../5kyu - Vector class');
const should = require('should');

describe('5kyu - Vector class', () => {
  let a;
  let b;
  let c;
  before(() => {
    a = new Vector([1,2,3]);
    b = new Vector([3,4,5]);
    c = new Vector([5,6,7,8]);
  });
  it('Should return new Vector([4,6,8]) for a.add(b)', (done) => {
    should(a.add(b)).eql(new Vector([4,6,8]));
    done();
  });
  it('Should return new Vector([-2,-2,-2]) for a.subtract(b)', (done) => {
    should(a.subtract(b)).eql(new Vector([-2,-2,-2]));
    done();
  });
  it('Should return 26 for a.dot(b)', (done) => {
    should(a.dot(b)).eql(26);
    done();
  });
  it('Should return true for a.equals(new Vector([1,2,3]))', (done) => {
    should(a.equals(new Vector([1,2,3]))).eql(true);
    done();
  });
  it('Should return (1,2,3) for a.toString())', (done) => {
    should(a.toString()).eql('(1,2,3)');
    done();
  });  
});