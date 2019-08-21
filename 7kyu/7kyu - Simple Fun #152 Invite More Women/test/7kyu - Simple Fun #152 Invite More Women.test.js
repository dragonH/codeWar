const inviteMoreWomen = require('../7kyu - Simple Fun #152 Invite More Women');
const should = require('should');

describe('7kyu - Simple Fun #152 Invite More Women', () => {
  it('Should reutrn true for inviteMoreWomen([1, -1, 1])', (done) => {
    should(inviteMoreWomen([1, -1, 1])).equal(true);
    done();
  });
  it('Should reutrn true for inviteMoreWomen([1, 1, 1])', (done) => {
    should(inviteMoreWomen([1, 1, 1])).equal(true);
    done();
  });
  it('Should reutrn false for inviteMoreWomen([-1, -1, -1])', (done) => {
    should(inviteMoreWomen([-1, -1, -1])).equal(false);
    done();
  });
  it('Should reutrn false for inviteMoreWomen([1, -1])', (done) => {
    should(inviteMoreWomen([1, -1])).equal(false);
    done();
  });      
});