const removeChar = require('../8kyu - Remove First and Last Character');
const should = require('should');

describe('8kyu - Remove First and Last Character', () => {
  it("Should return 'loquen' for removeChar('eloquent')", (done) => {
    should(removeChar('eloquent')).equal('loquen');
    done();
  });
  it("Should return 'ountr' for removeChar('country')", (done) => {
    should(removeChar('country')).equal('ountr');
    done();
  });
  it("Should return 'erso' for removeChar('person')", (done) => {
    should(removeChar('person')).equal('erso');
    done();
  });
  it("Should return 'lac' for removeChar('place')", (done) => {
    should(removeChar('place')).equal('lac');
    done();
  });     
});