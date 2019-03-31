function getStartTime(schedules, duration) {
  const availableTimes = getAvialableTime(schedules);
  const availableTime = availableTimes.find(timeRange => timeRangeFormat(timeRange) >= duration);
  return availableTime && availableTime[0] || null;
}

function getAvialableTime(schedules) {
  return schedules.reduce((freeTimes, schedule) => {
    const freeTime = getFreeTime(schedule);
    return getCommonFreeTime(freeTimes, freeTime);
  }, [['09:00', '19:00']]);
}

function getFreeTime(schedule) {
  const result = [];
  let start = schedule[0] && schedule[0][0];
  let last = schedule[schedule.length - 1] && schedule[schedule.length - 1][1];
  if (schedule.length <= 1) {
    return schedule;
  }
  if (start !== '09:00') {
    result.push(['09:00', start]);
  }
  schedule.forEach((cursor, index) => {
    const preCursor = schedule[index - 1];
    const check = preCursor && preCursor[1] !== cursor[0];
    if (index > 0 && check) {
      result.push([preCursor[1], cursor[0]]);
    }
  });
  if (last !== '19:00') {
    result.push([last, '19:00']);
  }
  return result;
}

function getCommonFreeTime(schedule1, schedule2) {
  const result = [];
  schedule1.forEach((range1) => {
    schedule2.forEach((range2) => {
      const BothFree = findBothFree(range1, range2);
      if (BothFree) {
        result.push(BothFree);
      }
    });
  });
  return result;
}

function findBothFree(range1, range2) {
  const min = (range1[0] < range2[0]) ? range1 : range2;
  const max = (min === range1) ? range2 : range1;
  if (min[1] < max[0]) {
    return null;
  }
  return [max[0], (min[1] < max[1]) ? min[1] : max[1]];
}

function timeRangeFormat(timeRange) {
  const startTime = timeRange[0].split(':');
  const endTime = timeRange[1].split(':');
  return ((Number(endTime[0]) * 60) + Number(endTime[1])) - ((Number(startTime[0]) * 60) + Number(startTime[1]))
}