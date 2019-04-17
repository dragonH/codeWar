module.exports = function isToday(date) {
    return date.setHours(0,0,0,0) === new Date().setHours(0,0,0,0);
};