const warnTheSheep = require("../8kyu - A wolf in sheep's clothing");
const should = require('should');

describe("8kyu - A wolf in sheep's clothing", () => {
  it('Should "Oi! Sheep number 2! You are about to be eaten by a wolf!" return for warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])', (done) => {
    should(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])).equal("Oi! Sheep number 2! You are about to be eaten by a wolf!");
    done();
  });
  it('Should "Oi! Sheep number 5! You are about to be eaten by a wolf!" return for warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])', (done) => {
    should(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])).equal("Oi! Sheep number 5! You are about to be eaten by a wolf!");
    done();
  });
  it('Should "Oi! Sheep number 6! You are about to be eaten by a wolf!" return for warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])', (done) => {
    should(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])).equal("Oi! Sheep number 6! You are about to be eaten by a wolf!");
    done();
  });
  it('Should "Oi! Sheep number 1! You are about to be eaten by a wolf!" return for warnTheSheep(["sheep", "wolf", "sheep"])', (done) => {
    should(warnTheSheep(["sheep", "wolf", "sheep"])).equal("Oi! Sheep number 1! You are about to be eaten by a wolf!");
    done();
  });
  it('Should "Pls go away and stop eating my sheep" return for warnTheSheep(["sheep", "sheep", "wolf"])', (done) => {
    should(warnTheSheep(["sheep", "sheep", "wolf"])).equal("Pls go away and stop eating my sheep");
    done();
  });       
});