module.exports = function rentalCarCost(d) {
  let bill = 0;
  if (d >= 7) {
    bill = (40 * d) - 50;
  } else if (d >= 3) {
    bill = (40 * d) - 20;
  } else {
    bill = 40 * d;
  }
  return bill;
};