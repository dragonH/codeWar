const finalGrade =require("../8kyu - Student's Final Grade");
const should = require('should');

describe("8kyu - Student's Final Grade", () => {
  it('Should return 100 for finalGrade(100, 12)', (done) => {
    should(finalGrade(100, 12)).equal(100);
    done();
  });
  it('Should return 100 for finalGrade(99, 0)', (done) => {
    should(finalGrade(99, 0)).equal(100);
    done();
  });
  it('Should return 100 for finalGrade(10, 15)', (done) => {
    should(finalGrade(10, 15)).equal(100);
    done();
  });
  it('Should return 90 for finalGrade(85, 5)', (done) => {
    should(finalGrade(85, 5)).equal(90);
    done();
  });
  it('Should return 0 for finalGrade(55, 0)', (done) => {
    should(finalGrade(55, 0)).equal(0);
    done();
  });       
});