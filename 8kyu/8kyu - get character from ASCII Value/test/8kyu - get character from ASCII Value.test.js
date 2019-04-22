const getChar = require('../8kyu - get character from ASCII Value');
const should = require('should');

describe('8kyu - get character from ASCII Value', () => {
  it('Should return " "for getChar(32)', (done) => {
    should(getChar(32)).equal(' ');
    done();
  });
  it('Should return "!" for getChar(33)', (done) => {
    should(getChar(33)).equal('!');
    done();
  });  
  it('Should return "}" for getChar(125)', (done) => {
    should(getChar(125)).equal('}');
    done();
  });
  it('Should return "_" for getChar(95)', (done) => {
    should(getChar(95)).equal('_');
    done();
  });
  it('Should return "c" for getChar(99)', (done) => {
    should(getChar(99)).equal('c');
    done();
  });   
});