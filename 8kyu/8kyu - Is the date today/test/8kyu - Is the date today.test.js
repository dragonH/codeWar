const isToday = require('../8kyu - Is the date today');
const should = require('should');

describe('8kyu - Is the date today', () => {
  it('Should return true for isToday(new Date())', (done) => {
    should(isToday(new Date())).equal(true);
    done();
  });
  it('Should return false for isToday(tomorrow)', (done) => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);    
    should(isToday(tomorrow)).equal(false);
    done();
  });
  it('Should return false for isToday(yesterday)', (done) => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);    
    should(isToday(yesterday)).equal(false);
    done();
  });
  it('Should return true for isToday(start)', (done) => {
    let start = new Date();
    start.setHours(0, 0, 0, 0);   
    should(isToday(start)).equal(true);
    done();
  });
  it('Should return true for isToday(end)', (done) => {
    var end = new Date();
    end.setHours(23, 59, 59, 999);   
    should(isToday(end)).equal(true);
    done();
  });        
});