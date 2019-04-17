const isLockNessMonster = require('../8kyu - A Strange Trip to the Market');
const should = require('should');

describe('8kyu - A Strange Trip to the Market', (done) => {
  it('Should return true for isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")', (done) => {
    should(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")).equal(true);
    done();
  });
  it('Should return true for isLockNessMonster("Howdy Pardner. Name\'s Pete Lexington. I reckon you\'re the kinda stiff who carries about tree fiddy?")', (done) => {
    should(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")).equal(true);
    done();
  });
  it('Should return true for isLockNessMonster("I\'m from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them")', (done) => {
    should(isLockNessMonster("I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them")).equal(true);
    done();
  });
  it('Should return false for isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.")', (done) => {
    should(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.")).equal(false);
    done();
  });
  it('Should return false for isLockNessMonster("I will absolutely, positively, never give that darn Lock Ness Monster any of my three dollars and fifty cents")', (done) => {
    should(isLockNessMonster("I will absolutely, positively, never give that darn Lock Ness Monster any of my three dollars and fifty cents")).equal(false);
    done();
  });       
});