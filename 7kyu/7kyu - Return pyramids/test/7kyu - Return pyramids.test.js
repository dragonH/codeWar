const pyramid = require('../7kyu - Return pyramids');
const should = require('should');

describe('7kyu - Return pyramids', () => {
  it('Should return "/\\\n" for pyramid(1)', (done) => {
    should(pyramid(1)).equal('/\\\n');
    done();
  });
  it('Should return " /\\\n/__\\\n for pyramid(2)', (done) => {
    should(pyramid(2)).equal(' /\\\n/__\\\n');
    done();
  });
  it('Should return "   /\\\n  /  \\\n /    \\\n/______\\\n" for pyramid(4)', (done) => {
    should(pyramid(4)).equal('   /\\\n  /  \\\n /    \\\n/______\\\n');
    done();
  });
  it('Should return "     /\\\n    /  \\\n   /    \\\n  /      \\\n /        \\\n/__________\\\n" for pyramid(6)', (done) => {
    should(pyramid(6)).equal('     /\\\n    /  \\\n   /    \\\n  /      \\\n /        \\\n/__________\\\n');
    done();
  });
  it('Should return "         /\\\n        /  \\\n       /    \\\n      /      \\\n     /        \\\n    /          \\\n   /            \\\n  /              \\\n /                \\\n/__________________\\\n" for pyramid(10)', (done) => {
    should(pyramid(10)).equal('         /\\\n        /  \\\n       /    \\\n      /      \\\n     /        \\\n    /          \\\n   /            \\\n  /              \\\n /                \\\n/__________________\\\n');
    done();
  });        
});