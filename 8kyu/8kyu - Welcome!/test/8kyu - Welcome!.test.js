const greet = require('../8kyu - Welcome!');
const should =require('should');

describe('8kyu - Welcome!', () => {
  before(() => {
    const langs = {
      'english': 'Welcome',
      'czech': 'Vitejte',
      'danish': 'Velkomst',
      'dutch': 'Welkom',
      'estonian': 'Tere tulemast',
      'finnish': 'Tervetuloa',
      'flemish': 'Welgekomen',
      'french': 'Bienvenue',
      'german': 'Willkommen',
      'irish': 'Failte',
      'italian': 'Benvenuto',
      'latvian': 'Gaidits',
      'lithuanian': 'Laukiamas',
      'polish': 'Witamy',
      'spanish': 'Bienvenido',
      'swedish': 'Valkommen',
      'welsh': 'Croeso'
      };    
  });
  it('Should return "Welcome" for greet("english")', (done) => {
    should(greet("english")).equal('Welcome');
    done();
  });
  it('Should return "Vitejte" for greet("czech")', (done) => {
    should(greet("czech")).equal('Vitejte');
    done();
  });
  it('Should return "Welcome" for greet("IP_ADDRESS_INVALID")', (done) => {
    should(greet("IP_ADDRESS_INVALID")).equal('Welcome');
    done();
  });
  it('Should return "Benvenuto" for greet("italian")', (done) => {
    should(greet("italian")).equal('Benvenuto');
    done();
  });
  it('Should return "Bienvenido" for greet("spanish")', (done) => {
    should(greet("spanish")).equal('Bienvenido');
    done();
  });       
});