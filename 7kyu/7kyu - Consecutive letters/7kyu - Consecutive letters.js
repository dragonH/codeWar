module.exports = function solve(s){
  return s.length === 1
    ? true
    : [...new Set(s.split('')
                   .map(char => char.charCodeAt())
                   .sort((a, b) => a - b)
                   .map((el, index) => el - index))
                   ].length === 1
                     ? true
                     : false;
}