module.exports = function replicate(times, number) {
	return times > 0 
    ? Array(times).fill(number)
    : [];
};