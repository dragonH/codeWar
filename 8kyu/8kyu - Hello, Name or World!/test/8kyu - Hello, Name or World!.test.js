const hello = require('../8kyu - Hello, Name or World!');
const should = require('should');

describe('8kyu - Hello, Name or World!', () => {
  it('Should return "Hello, John!" for hello("johN")', (done) => {
    should(hello('johN')).equal('Hello, John!');
    done();
  });
  it('Should return "Hello, Alice!" for hello("alice")', (done) => {
    should(hello('alice')).equal('Hello, Alice!');
    done();
  });
  it('Should return "Hello, World!" for hello()', (done) => {
    should(hello()).equal('Hello, World!');
    done();
  });
  it('Should return "Hello, World!" for hello("")', (done) => {
    should(hello('')).equal('Hello, World!');
    done();
  });      
});
