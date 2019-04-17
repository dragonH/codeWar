const remove = require('../8kyu - Exclamation marks series #6 Remove n exclamation marks in the sentence from left to right');
const should = require('should');

describe('8kyu - Exclamation marks series #6 Remove n exclamation marks in the sentence from left to right', () => {
  it('Should return "Hi" for remove("Hi!",1)', (done) => {
    should(remove("Hi!",1)).equal('Hi');
    done();
  });
  it('Should return "Hi!!" for remove("Hi!!!",1)', (done) => {
    should(remove("Hi!!!",1)).equal('Hi!!');
    done();
  });
  it('Should return "Hi" for remove("Hi!!!",100)', (done) => {
    should(remove("Hi!!!",100)).equal('Hi');
    done();
  });
  it('Should return "Hi" for remove("!Hi",1)', (done) => {
    should(remove("!Hi",1)).equal('Hi');
    done();
  });
  it('Should return "!!Hi !!hi!!! !hi" for remove("!!!Hi !!hi!!! !hi",1)', (done) => {
    should(remove("!!!Hi !!hi!!! !hi",1)).equal('!!Hi !!hi!!! !hi');
    done();
  });        
});