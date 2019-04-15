const getAge = require('../8kyu - Parse nice int from char problem');
const should = require('should');

describe('8kyu - Parse nice int from char problem', () => {
  it('Should return 4 for getAge("4 years old")', (done) => {
    should(getAge("4 years old")).equal(4);
    done();
  });
  it('Should return 8 for getAge("8 years old")', (done) => {
    should(getAge("8 years old")).equal(8);
    done();
  });
  it('Should return 6 for getAge("6 years old")', (done) => {
    should(getAge("6 years old")).equal(6);
    done();
  });
  it('Should return 5 for getAge("5 years old")', (done) => {
    should(getAge("5 years old")).equal(5);
    done();
  });
  it('Should return 1 for getAge("1 years old")', (done) => {
    should(getAge("1 years old")).equal(1);
    done();
  });       
});