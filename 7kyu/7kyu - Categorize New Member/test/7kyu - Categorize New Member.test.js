const openOrSenior = require('../7kyu - Categorize New Member');
const should = require('should');

describe('7kyu - Categorize New Member', () => {
  it("Should return ['Open', 'Senior', 'Open', 'Senior'] for openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])", (done) => {
    should(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])).eql(['Open', 'Senior', 'Open', 'Senior']);
    done();
  });
  it("Should return ['Open', 'Open', 'Open', 'Open'] for openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])", (done) => {
    should(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])).eql(['Open', 'Open', 'Open', 'Open']);
    done();
  });
  it("Should return ['Senior', 'Open', 'Open', 'Open'] for openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])", (done) => {
    should(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])).eql(['Senior', 'Open', 'Open', 'Open']);
    done();
  });
  it("Should return [] for openOrSenior([])", (done) => {
    should(openOrSenior([])).eql([]);
    done();
  });
  it("Should return ['Open','Senior'] for openOrSenior([[54,9],[55,9]])", (done) => {
    should(openOrSenior([[54,9],[55,9]])).eql(['Open','Senior']);
    done();
  });       
});