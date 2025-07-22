function solution(n, times) {
  let left = 1;
  let right = Math.max(...times) * n;

  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let total = 0;
    for (let i = 0; i < times.length; i++) {
      total += Math.floor(mid / times[i]);
    }

    if (total >= n) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}
