module.exports = function Counter() {
  this.counter = 0;
  this.check = () => {
    return this.counter;
  }
  this.increment = () => {
    return this.counter++;
  }
};