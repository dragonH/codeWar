module.exports = isSquare = function(n){
  return n < 0
    ? false
    : !`${Math.sqrt(n)}`.includes('.')
}