const removeExclamationMarks = require('../8kyu - Remove exclamation marks');
const should = require('should');

describe('8kyu - Remove exclamation marks', () => {
  it('Should return a!p!p!l!e for removeExclamationMarks("a!p!p!l!e")', (done) => {
    should(removeExclamationMarks("a!p!p!l!e")).equal('apple');
    done();
  });
  it('Should return !a!p!p!!!l!e for removeExclamationMarks("a!p!p!l!e")', (done) => {
    should(removeExclamationMarks("!a!p!p!!!l!e")).equal('apple');
    done();
  });
  it('Should return !!!!!!!a!p!!!!!p!!!l!e for removeExclamationMarks("a!p!p!l!e")', (done) => {
    should(removeExclamationMarks("!!!!!!!a!p!!!!!p!!!l!e")).equal('apple');
    done();
  });   
});