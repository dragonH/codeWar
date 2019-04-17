const capitalizeWord = require('../8kyu - Capitalization and Mutability');
const should = require('should');

describe('8kyu - Capitalization and Mutability', () => {
  it("Should return 'Word' for capitalizeWord('word')", (done) => {
    should(capitalizeWord('word')).equal('Word');
    done();
  });
  it("Should return 'I' for capitalizeWord('i')", (done) => {
    should(capitalizeWord('i')).equal('I');
    done();
  });
  it("Should return 'Glasswear' for capitalizeWord('glasswear')", (done) => {
    should(capitalizeWord('glasswear')).equal('Glasswear');
    done();
  });
  it("Should return 'Hello world' for capitalizeWord('hello world')", (done) => {
    should(capitalizeWord('hello world')).equal('Hello world');
    done();
  });      
});