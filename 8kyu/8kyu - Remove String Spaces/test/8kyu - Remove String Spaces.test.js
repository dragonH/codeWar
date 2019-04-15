const noSpace = require('../8kyu - Remove String Spaces');
const should = require('should');

describe('8kyu - Remove String Spaces', () => {
  it("Should return '8j8mBliB8gimjB8B8jlB' for noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')", (done) => {
    should(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')).equal('8j8mBliB8gimjB8B8jlB');
    done();
  });
  it("Should return '88Bifk8hB8BB8BBBB888chl8BhBfd' for noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')", (done) => {
    should(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')).equal('88Bifk8hB8BB8BBBB888chl8BhBfd');
    done();
  });
  it("Should return '88Bifk8hB8BB8BBBB888chl8BhBfd' for noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')", (done) => {
    should(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')).equal('88Bifk8hB8BB8BBBB888chl8BhBfd');
    done();
  });
  it("Should return '8aaaaaddddr' for noSpace('8aaaaa dddd r     ')", (done) => {
    should(noSpace('8aaaaa dddd r     ')).equal('8aaaaaddddr');
    done();
  });
  it("Should return 'jfBmgklf8hg88lbe8' for noSpace('jfBm  gk lf8hg  88lbe8 ')", (done) => {
    should(noSpace('jfBm  gk lf8hg  88lbe8 ')).equal('jfBmgklf8hg88lbe8');
    done();
  });        
});