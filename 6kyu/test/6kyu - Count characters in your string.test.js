const count = require('../6kyu - Count characters in your string');
const should = require('should');

describe('6kyu - Count characters in your string', () => {
  it('Should return { a: 2 } for count("aa")', (done) => {
    count('aa').should.be.eql({ a: 2});
    done();
  });
  it('Should return { a: 2, b: 2 } for count("aabb")', (done) => {
    count('aabb').should.be.eql({ a: 2, b: 2 });
    done();
  });  
  it('Should return { b: 2, a: 2 } for count("aabb")', (done) => {
    count('aabb').should.be.eql({ b: 2, a: 2 });
    done();
  });  
});