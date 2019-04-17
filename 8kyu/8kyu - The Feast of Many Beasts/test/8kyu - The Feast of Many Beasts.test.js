const feast = require('../8kyu - The Feast of Many Beasts');
const should = require('should');

describe('8kyu - The Feast of Many Beasts', () => {
  it('Should return true for feast("great blue heron", "garlic naan")', (done) => {
    should(feast("great blue heron", "garlic naan")).equal(true);
    done();
  });
  it('Should return true for feast("chickadee", "chocolate cake")', (done) => {
    should(feast("chickadee", "chocolate cake")).equal(true);
    done();
  });
  it('Should return false for feast("brown bear", "bear claw")', (done) => {
    should(feast("brown bear", "bear claw")).equal(false);
    done();
  });
  it('Should return true for feast("marmot", "mulberry tart")', (done) => {
    should(feast("marmot", "mulberry tart")).equal(true);
    done();
  });
  it('Should return true for feast("porcupine", "pie")', (done) => {
    should(feast("porcupine", "pie")).equal(true);
    done();
  });       
});