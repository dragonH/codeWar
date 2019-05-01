module.export = String.prototype.isUpperCase = function() {
  console.log(this, this.toUpperCase())
  return this.toString() === this.toUpperCase();
};