const sabb = require('../7kyu - The Office VI - Sabbatical');
const should = require('should');

describe('7kyu - The Office VI - Sabbatical', () => {
  it("Should return 'Sabbatical! Boom!' for sabb('Can I have a sabbatical?', 5, 5)", (done) => {
    should(sabb('Can I have a sabbatical?', 5, 5)).equal('Sabbatical! Boom!');
    done();
  });
  it("Should return 'Back to your desk, boy.' for sabb('Why are you shouting?', 7, 2)", (done) => {
    should(sabb('Why are you shouting?', 7, 2)).equal('Back to your desk, boy.');
    done();
  });
  it("Should return 'Sabbatical! Boom!' for sabb('What do you mean I cant learn to code??', 8, 9)", (done) => {
    should(sabb('What do you mean I cant learn to code??', 8, 9)).equal('Sabbatical! Boom!');
    done();
  });
  it("Should return 'Back to your desk, boy.' for sabb('Please calm down', 9, 1)", (done) => {
    should(sabb('Please calm down', 9, 1)).equal('Back to your desk, boy.');
    done();
  });
  it("Should return 'Sabbatical! Boom!' for sabb('I can?! Nice. FaC..Im coming :D', 9, 9)", (done) => {
    should(sabb('I can?! Nice. FaC..Im coming :D', 9, 9)).equal('Sabbatical! Boom!');
    done();
  });    
});