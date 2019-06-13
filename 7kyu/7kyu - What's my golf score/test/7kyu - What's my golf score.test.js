const golfScoreCalculator = require("../7kyu - What's my golf score");
const should = require('should');

describe("7kyu - What's my golf score", () => {
  it("Should -1 return for golfScoreCalculator('443454444344544443', '353445334534445344')", (done) => {
    should(golfScoreCalculator('443454444344544443', '353445334534445344')).equal(-1);
    done();
  });
});