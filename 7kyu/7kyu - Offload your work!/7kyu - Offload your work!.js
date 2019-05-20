module.exports = function workNeeded(projectMinutes, freelancers){
  let totalTime = 0;
  freelancers.forEach((time) => {
    totalTime += time[0] * 60 + time[1];
  });
  if (projectMinutes - totalTime <= 0) {
    return 'Easy Money!';
  } else {
    const hours = (projectMinutes - totalTime) / 60;
    const minutes = (projectMinutes - totalTime) % 60;
    return `I need to work ${Math.floor(hours)} hour(s) and ${minutes} minute(s)`;
  }
};