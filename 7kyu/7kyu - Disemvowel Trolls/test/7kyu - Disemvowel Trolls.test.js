const disemvowel = require('../7kyu - Disemvowel Trolls');
const should = require('should');

describe('7kyu - Disemvowel Trolls', () => {
  it('Should return "Ths wbst s fr lsrs LL!" for disemvowel("This website is for losers LOL!")', (done) => {
    should(disemvowel("This website is for losers LOL!")).equal('Ths wbst s fr lsrs LL!');
    done();
  });
  it("Should return 'N ffns bt,\nYr wrtng s mng th wrst 'v vr rd' for disemvowel('No offense but,\nYour writing is among the worst I've ever read')", (done) => {
    should(disemvowel("No offense but,\nYour writing is among the worst I've ever read")).equal("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
    done();
  });
  it("Should return 'Wht r y,  cmmnst?' for disemvowel('What are you, a communist?')", (done) => {
    should(disemvowel("What are you, a communist?")).equal("Wht r y,  cmmnst?");
    done();
  });
});