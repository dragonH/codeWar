const fizzBuzzCuckooClock = require('../7kyu - Fizz Buzz Cuckoo Clock');
const should = require('should');

describe('7kyu - Fizz Buzz Cuckoo Clock', () => {
  it('Should return "tick" for fizzBuzzCuckooClock("13:34")', (done) =>　{
    should(fizzBuzzCuckooClock("13:34")).equal('tick');
    done();
  });
  it('Should return "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo" for fizzBuzzCuckooClock("21:00")', (done) =>　{
    should(fizzBuzzCuckooClock("21:00")).equal('Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
    done();
  });
  it('Should return "Fizz Buzz" for fizzBuzzCuckooClock("11:15")', (done) =>　{
    should(fizzBuzzCuckooClock("11:15")).equal('Fizz Buzz');
    done();
  });
  it('Should return "Fizz" for fizzBuzzCuckooClock("03:03")', (done) =>　{
    should(fizzBuzzCuckooClock("03:03")).equal('Fizz');
    done();
  });
  it('Should return "Cuckoo" for fizzBuzzCuckooClock("14:30")', (done) =>　{
    should(fizzBuzzCuckooClock("14:30")).equal('Cuckoo');
    done();
  });        
});