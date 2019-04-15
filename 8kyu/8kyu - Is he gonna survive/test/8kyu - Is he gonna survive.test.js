const hero = require('../8kyu - Is he gonna survive');
const should = require('should');

describe('8kyu - Is he gonna survive', () => {
  it('Shoud return true for hero(10, 5)', (done) => {
    should(hero(10, 5)).equal(true);
    done();
  });
  it('Shoud return false for hero(7, 4)', (done) => {
    should(hero(7, 4)).equal(false);
    done();
  });
  it('Shoud return false for hero(4, 5)', (done) => {
    should(hero(4, 5)).equal(false);
    done();
  });
  it('Shoud return true for hero(100, 40)', (done) => {
    should(hero(100, 40)).equal(true);
    done();
  });
  it('Shoud return false for hero(1500, 751)', (done) => {
    should(hero(1500, 751)).equal(false);
    done();
  });        
});