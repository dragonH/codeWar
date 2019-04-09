module.exports = Vector = function (components) {
  this.vector = components;

  this.add = (vectorToAdd) => {
    checkLength(vectorToAdd);
    return new Vector(this.vector.map((el, index) => Number(el) + Number(vectorToAdd.vector[index])));      
  };
  this.subtract = (vectorToSubtract) => {
    checkLength(vectorToSubtract);
    return new Vector(this.vector.map((el, index) => Number(el) - Number(vectorToSubtract.vector[index])));
  };
  this.dot = (vectorToDot) => {
    let sum = 0;
    checkLength(vectorToDot);
    this.vector.forEach((el, index) => {
      sum += el * vectorToDot.vector[index];
    });
    return sum;
  };
  this.equals = (vectorToCompare) => {
    return (this.vector.join('') === vectorToCompare.vector.join('')) ? true : false;
  };
  this.norm = () => {
    let sum = 0;
    this.vector.forEach((el, index) => {
      sum += Math.pow(el, 2);
    });
    return Math.sqrt(sum);    
  };
  this.toString = () => {
    return `(${this.vector.join(',')})`
  }
  const checkLength = (newVector) => {
    if (this.vector.length !== newVector.vector.length) {
      throw new Error();
    }
  }
};