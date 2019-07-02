const tailSwap = require('../7kyu - Tail Swap');
const should = require('should');

describe('7kyu - Tail Swap', () => {
  it("Should return ['abc:456', 'cde:123'] for tailSwap(['abc:123', 'cde:456'])", (done) => {
    should(tailSwap(['abc:123', 'cde:456'])).eql(['abc:456', 'cde:123']);
    done();
  });
  it("Should return ['a:xyz', '777:12345'] for tailSwap(['a:12345', '777:xyz'])", (done) => {
    should(tailSwap(['a:12345', '777:xyz'])).eql(['a:xyz', '777:12345']);
    done();
  });  
});