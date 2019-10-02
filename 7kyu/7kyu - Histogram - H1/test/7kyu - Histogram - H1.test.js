const histogram = require('../7kyu - Histogram - H1');
const should = require('should');

describe('7kyu - Histogram', () => {
  it('', (done) => {
    should(histogram([7,3,10,1,0,5])).eql(`6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
`);
    done();
  });
});