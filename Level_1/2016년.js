function solution(a, b) {
  const dayOfTheWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (a === 1) {
    return dayOfTheWeek[(b - 1) % 7];
  } else {
    let daySum = 0;
    for (let i = 0; i < a - 1; i++) {
      daySum += arr[i];
    }
    return dayOfTheWeek[(daySum + b - 1) % 7];
  }
}
