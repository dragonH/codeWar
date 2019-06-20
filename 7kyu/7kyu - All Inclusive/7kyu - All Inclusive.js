module.exports = function containAllRots(strng, arr) {
  return [...strng].map((el, index) => strng.slice(index).concat(strng.slice(0, index)))
                   .every(el1 => arr.includes(el1));
};