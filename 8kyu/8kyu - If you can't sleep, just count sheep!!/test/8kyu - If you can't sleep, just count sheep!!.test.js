const countSheep = require("../8kyu - If you can't sleep, just count sheep!!");
const should = require('should');

describe("8kyu - If you can't sleep, just count sheep!!", () => {
  it('Should return "1 sheep..." for countSheep(1)', (done) => {
    should(countSheep(1)).equal('1 sheep...');
    done();
  });
  it('Should return "1 sheep...2 sheep..." for countSheep(2)', (done) => {
    should(countSheep(2)).equal('1 sheep...2 sheep...');
    done();
  });
  it('Should return "1 sheep...2 sheep...3 sheep..." for countSheep(3)', (done) => {
    should(countSheep(3)).equal('1 sheep...2 sheep...3 sheep...');
    done();
  });    
});