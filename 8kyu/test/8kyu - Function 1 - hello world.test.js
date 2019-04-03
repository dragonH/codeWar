const greet = require('../8kyu - Function 1 - hello world');
const should = require('should');

describe('Function 1 - hello world', () => {
  it ('Should return "hello world! for greet()"', (done) => {
    should(greet()).equal('hello world!');
    done();
  });
});