const nextHappyYear = require('../7kyu - See You Next Happy Year');
const should = require('should');

describe('7kyu - See You Next Happy Year', () => {
  it('Should return 1023 from nextHappyYear(1001)', (done) => {
    should(nextHappyYear(1001)).equal(1023);
    done();
  });
  it('Should return 1203 from nextHappyYear(1123)', (done) => {
    should(nextHappyYear(1123)).equal(1203);
    done();
  });  
  it('Should return 2013 from nextHappyYear(2001)', (done) => {
    should(nextHappyYear(2001)).equal(2013);
    done();
  });   
  it('Should return 2340 from nextHappyYear(2334)', (done) => {
    should(nextHappyYear(2334)).equal(2340);
    done();
  });      
  it('Should return 3401 from nextHappyYear(3331)', (done) => {
    should(nextHappyYear(3331)).equal(3401);
    done();
  });      
});
