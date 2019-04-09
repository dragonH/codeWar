const getStartTime = require('../5kyu - Finding an appointment');
const should = require('should');

describe('5kyu - Finding an appointment', () => {
  const schedules = [[['09:37', '11:19'], ['11:27', '13:37'], ['16:29', '17:41']],
  [['10:07', '10:39'], ['10:41', '11:03'], ['12:21', '12:22'], ['15:49', '16:11'], ['17:29', '17:54']],
  [['09:48', '12:26'], ['15:41', '15:59'], ['18:50', '18:57']],
  [['11:21', '12:42'], ['12:51', '13:20'], ['17:51', '17:53'], ['18:07', '18:11']],
  [['09:41', '09:57'], ['10:03', '10:14'], ['10:32', '10:39'], ['10:56', '11:17'], ['11:23', '11:41'], ['11:59', '12:03'], ['12:28', '12:45'], ['17:19', '17:27'], ['18:56', '18:57']]];
  
  it('Should return 09:00 for getStartTime(schedules, 37)', (done) => {
    should(getStartTime(schedules, 37)).equal('09:00');
    done();
  });
  it('Should return 13:37 for getStartTime(schedules, 38)', (done) => {
    should(getStartTime(schedules, 38)).equal('13:37');
    done();
  });
  it('Should return 13:37 for getStartTime(schedules, 124)', (done) => {
    should(getStartTime(schedules, 124)).equal('13:37');
    done();
  });
  it('Should return null for getStartTime(schedules, 125)', (done) => {
    should(getStartTime(schedules, 125)).equal(null);
    done();
  });
});