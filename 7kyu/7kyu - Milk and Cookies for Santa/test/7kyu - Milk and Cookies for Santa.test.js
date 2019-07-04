const timeForMilkAndCookies = require('../7kyu - Milk and Cookies for Santa');
const should = require('should');

describe('7kyu - Milk and Cookies for Santa', () => {
  it('Should return true for timeForMilkAndCookies(new Date(2013, 11, 24))', (done) => {
    should(timeForMilkAndCookies(new Date(2013, 11, 24))).equal(true);
    done();
  });
  it('Should return false for timeForMilkAndCookies(new Date(2013, 0, 23))', (done) => {
    should(timeForMilkAndCookies(new Date(2013, 0, 23))).equal(false);
    done();
  });
  it('Should return true for timeForMilkAndCookies(new Date(3000, 11, 24))', (done) => {
    should(timeForMilkAndCookies(new Date(3000, 11, 24))).equal(true);
    done();
  }); 
});