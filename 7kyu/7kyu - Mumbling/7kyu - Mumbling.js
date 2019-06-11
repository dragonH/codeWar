module.exports = function accum(s) {
	return s.toUpperCase().split('')
                        .map((char, index) => char.concat((char.toLowerCase()).repeat(index)))
                        .join('-');
};