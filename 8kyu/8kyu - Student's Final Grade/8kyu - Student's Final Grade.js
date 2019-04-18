module.exports = function finalGrade (exam, projects) {
  let point = 0;
  if (exam > 90 || projects > 10) {
    point = 100;
  } else if (exam > 75 && projects >= 5) {
    point = 90;
  } else if(exam > 50 && projects >= 2) {
    point = 75;
  }
  return point;
};