const solution = require('../7kyu - Substituting Variables Into Strings Padded Numbers');
const should = require('should');

describe('7kyu - Substituting Variables Into Strings Padded Numbers', () => {
  it('Should return "Value is 00005" for solution(5)', (done) => {
    should(solution(5)).equal('Value is 00005');
    done();
  });
  it('Should return "Value is 01204" for solution(1204)', (done) => {
    should(solution(1204)).equal('Value is 01204');
    done();
  });
  it('Should return "Value is 00109" for solution(109)', (done) => {
    should(solution(109)).equal('Value is 00109');
    done();
  });
  it('Should return "Value is 00000" for solution(0)', (done) => {
    should(solution(0)).equal('Value is 00000');
    done();
  });      
});