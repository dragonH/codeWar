const meeting = require('../7kyu - The Office IV - Find a Meeting Room');
const should = require('should');

describe('7kyu - The Office IV - Find a Meeting Room', () => {
  it("Should return 1 for meeting(['X', 'O', 'X'])", (done) => {
    should(meeting(['X', 'O', 'X'])).equal(1);
    done();
  });
  it("Should return 0 for meeting(['O','X','X','X','X'])", (done) => {
    should(meeting(['O','X','X','X','X'])).equal(0);
    done();
  });
  it("Should return 2 for meeting(['X','X','O','X','X'])", (done) => {
    should(meeting(['X','X','O','X','X'])).equal(2);
    done();
  });
  it("Should return 'None available!' for meeting(['X','X','X','X','X'])", (done) => {
    should(meeting(['X','X','X','X','X'])).equal('None available!');
    done();
  });      
});