const generateShape = require('../7kyu - Build a square');
const should = require('should');

describe('7kyu - Build a square', () => {
  it('Should return "+++\n+++\n+++" for generateShape(3)', (done) => {
    should(generateShape(3)).equal('+++\n+++\n+++');
    done();
  });
  it('Should return "+++\n+++\n+++\n+++" for generateShape(4)', (done) => {
    should(generateShape(4)).equal('+++\n+++\n+++\n+++');
    done();
  });
  it('Should return "+++\n+++\n+++\n+++\n+++" for generateShape(5)', (done) => {
    should(generateShape(5)).equal('+++\n+++\n+++\n+++\n+++');
    done();
  }); 
  it('Should return "+++\n+++\n+++\n+++\n+++\n+++" for generateShape(6)', (done) => {
    should(generateShape(6)).equal('+++\n+++\n+++\n+++\n+++\n+++');
    done();
  });   
});