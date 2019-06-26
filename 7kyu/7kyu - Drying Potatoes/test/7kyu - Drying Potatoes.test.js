const potatoes = require('../7kyu - Drying Potatoes');
const should = require('should');

describe('7kyu - Drying Potatoes', () => {
  it('Should return 114 for potatoes(82, 127, 80)', (done) => {
    should(potatoes(82, 127, 80)).equal(114);
    done();
  });
  it('Should return 100 for potatoes(93, 129, 91)', (done) => {
    should(potatoes(93, 129, 91)).equal(100);
    done();
  });
  it('Should return 104 for potatoes(82, 134, 77)', (done) => {
    should(potatoes(82, 134, 77)).equal(104);
    done();
  });
  it('Should return 149 for potatoes(90, 194, 87)', (done) => {
    should(potatoes(90, 194, 87)).equal(149);
    done();
  });
  it('Should return 135 for potatoes(82, 173, 77)', (done) => {
    should(potatoes(82, 173, 77)).equal(135);
    done();
  });        
});