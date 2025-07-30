function solution(schedules, timelogs, startday) {
  const limitHours = [];
  const limitMinutes = [];

  for (let i = 0; i < schedules.length; i++) {
    let limitHour = Math.floor(schedules[i] / 100);
    let limitMinute = schedules[i] - limitHour * 100 + 10;
    if (limitMinute >= 60) {
      limitHour++;
      limitMinute -= 60;
    }
    limitHours.push(limitHour);
    limitMinutes.push(limitMinute);
  }

  const people = Array.from({ length: schedules.length }, () => true);

  for (let i = 0; i < timelogs.length; i++) {
    for (let j = 0; j < 7; j++) {
      const today = startday + j > 7 ? startday + j - 7 : startday + j;

      if (today === 6 || today === 7) continue;

      const hour = Math.floor(timelogs[i][j] / 100);
      const minute = timelogs[i][j] - hour * 100;

      if (hour > limitHours[i]) {
        people[i] = false;
        break;
      } else if (hour === limitHours[i]) {
        if (minute > limitMinutes[i]) {
          people[i] = false;
        }
      }
    }
  }

  return people.filter((v) => v).length;
}
