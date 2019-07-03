module.exports = function pyramid(n){
  return new Array(n - 1).fill('0')
                         .map((el, index) => ' '.repeat(n - index - 1)
                                                .concat('/')
                                                .concat(' '.repeat(index * 2))
                                                .concat('\\\n'))
                         .concat('/'.concat('_'.repeat((n - 1) * 2)).concat('\\\n'))
                         .join('');
}