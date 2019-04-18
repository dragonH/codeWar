const whatday = require('../8kyu - Return the day');
const should = require('should');

describe('8kyu - Return the day', () => {
  it('Should return "Sunday" for whatday(1)', (done) => {
    should(whatday(1)).equal('Sunday');
    done();    
  });
  it('Should return "Monday" for whatday(2)', (done) => {
    should(whatday(2)).equal('Monday');
    done();    
  });
  it('Should return "Tuesday" for whatday(3)', (done) => {
    should(whatday(3)).equal('Tuesday');
    done();    
  });
  it('Should return "Saturday" for whatday(7)', (done) => {
    should(whatday(7)).equal('Saturday');
    done();    
  });
  it('Should return "Wrong, please enter a number between 1 and 7" for whatday(20)', (done) => {
    should(whatday(20)).equal('Wrong, please enter a number between 1 and 7');
    done();    
  });        
});