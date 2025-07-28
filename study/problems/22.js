// 최대 부분 증가 수열(DP)

function solution(arr) {
  // 부분 수열 : 배열에서 일부 원소를 순서대로 선택한 것
  // 반드시 연속일 필요는 없음

  /* 
  let last = arr[0];
  let numbers = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (last < arr[i]) {
      last = arr[i];
      numbers.push(arr[i]);
    }
  }

  return numbers.length;
  */

  // dp[1] = i번째 원소까지 봤을 때, i원소를 반드시 포함하는 가장 긴 부분 수열 길이
  // [10, 20, 10, 30, 20, 50]
  // dp[0] = 1;
  // dp[1] = dp[0] + 1 = 2;
  // dp[2] = 1;
  // dp[2] = 가장 큰 dp값 + 1 = 2 + 1 = 3
  // dp[i] = max(dp[j] + 1);
  // dp[i] = 1

  const n = arr.length;
  const dp = Array(n).fill(1); // 모두 자기 자신만 포함하는 길이

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(solution([10, 20, 10, 30, 20, 50]));
console.log(solution([3, 10, 2, 1, 20]));
