const findShort = require('../7kyu - Shortest Word');
const should = require('should');

describe('7kyu - Shortest Word', () => {
  it('Should return 3 for findShort("bitcoin take over the world maybe who knows perhaps")', (done) => {
    should(findShort("bitcoin take over the world maybe who knows perhaps")).equal(3);
    done();
  });
  it('Should return 3 for findShort("turns out random test cases are easier than writing out basic ones")', (done) => {
    should(findShort("turns out random test cases are easier than writing out basic ones")).equal(3);
    done();
  });
  it('Should return 3 for findShort("lets talk about javascript the best language")', (done) => {
    should(findShort("lets talk about javascript the best language")).equal(3);
    done();
  });
  it('Should return 1 for findShort("i want to travel the world writing code one day")', (done) => {
    should(findShort("i want to travel the world writing code one day")).equal(1);
    done();
  });
  it('Should return 2 for findShort("Lets all go on holiday somewhere very cold")', (done) => {
    should(findShort("Lets all go on holiday somewhere very cold")).equal(2);
    done();
  });        
});