const countPositivesSumNegatives = require('../8kyu - Count of positives( sum of negatives)');
const should = require('should');

describe('8kyu - Count of positives( sum of negatives)', () => {
  it('Should return [10, -65] for countPositivesSumNegatives(testData)', (done) => {
    const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    should(countPositivesSumNegatives(testData)).eql([10, -65]);    done();
  });
  it('Should return [8, -50] for countPositivesSumNegatives(testData)', (done) => {
    const testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    should(countPositivesSumNegatives(testData)).eql([8, -50]);    done();
  });  
});