// 생산 공정 최적화(이분탐색)

function solution(n, speeds) {
  let left = 1;
  // 최악의 경우: 가장 느린 기계가 n개를 혼자 만들 때 걸리는 시간
  let right = Math.max(...speeds) * n;
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // let total = 0;
    // for (let time of speeds) {
    //   total += Math.floor(mid / time);
    // }
    const total = speeds.reduce((sum, time) => sum + Math.floor(mid / time), 0);
    // ex
    // A: 1개 만드는 데 2초
    // B: 1개 만드는 데 3초
    // 8개를 만들어야 할 때
    // mid = 10초라면
    // A는 10초 동안 10 / 2 = 5개 생산
    // B는 10초 동안 10 / 3 = 3개 생산

    if (total >= n) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

console.log(solution(8, [5, 9]));
console.log(solution(6, [7, 10]));
