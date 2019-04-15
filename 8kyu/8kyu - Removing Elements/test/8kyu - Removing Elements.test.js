const removeEveryOther = require('../8kyu - Removing Elements');
const should = require('should');

describe('8kyu - Removing Elements', () => {
  it("Should return ['Hello', 'Hello Again'] for removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])", (done) => {
    should(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])).eql(['Hello', 'Hello Again']);
    done();
  });
  it("Should return [1, 3, 5, 7, 9] for removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])", (done) => {
    should(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).eql([1, 3, 5, 7, 9]);
    done();
  });
  it("Should return [[1, 2]] for removeEveryOther([[1, 2]])", (done) => {
    should(removeEveryOther([[1, 2]])).eql([[1, 2]]);
    done();
  });
  it("Should return [['Goodbye']] for removeEveryOther([['Goodbye'], {'Great': 'Job'}])", (done) => {
    should(removeEveryOther([['Goodbye'], {'Great': 'Job'}])).eql([['Goodbye']]);
    done();
  });      
});