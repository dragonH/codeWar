module.exports = function dative(word) {
  return ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű']
    .indexOf(word.replace(/[^eéiíöőüűaáoóuú]/gi, '')
    .slice(-1)) > - 1
      ? word.concat('nek')
      : word.concat('nak');
}