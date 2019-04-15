const countSheeps = require('../8kyu - Counting sheep');
const should = require('should');

describe('8kyu - Counting sheep...', () => {
  it('Should return for countSheeps(array1)', (done) => {
    const array1 = [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true ];
      should(countSheeps(array1)).equal(17);
      done();
  });
  it('Should return for countSheeps(array1)', (done) => {
    const array2 = [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true ];
      array2.push(true);
      should(countSheeps(array2)).equal(18);
      done();
  });
});