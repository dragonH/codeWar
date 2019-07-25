const maxProduct = require('../7kyu - Product Of Maximums Of Array (Array Series #2)');
const should = require('should');

describe('7kyu - Product Of Maximums Of Array (Array Series #2)', () => {
  it('Should return 20 for maxProduct([4,3,5], 2)', (done) => {
    should(maxProduct([4,3,5], 2)).equal(20);
    done();
  });
  it('Should return 720 for maxProduct([10,8,7,9], 3)', (done) => {
    should(maxProduct([10,8,7,9], 3)).equal(720);
    done();
  });
  it('Should return 288 for maxProduct([8,6,4,6], 3)', (done) => {
    should(maxProduct([8,6,4,6], 3)).equal(288);
    done();
  });
  it('Should return 9600 for maxProduct([10,2,3,8,1,10,4], 5)', (done) => {
    should(maxProduct([10,2,3,8,1,10,4], 5)).equal(9600);
    done();
  }); 
  it('Should return 247895375 for maxProduct([13,12,-27,-302,25,37,133,155,-14], 5)', (done) => {
    should(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5)).equal(247895375);
    done();
  });     
});