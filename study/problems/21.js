// 계단 오르기(DP)

function solution(n) {
  // n = 4
  // 1 1 1 1
  // 1 1 2
  // 1 2 1
  // 2 1 1
  // 2 2

  // n개까지 가는 방법을 알기 위해서
  // n - 1 에서 한칸 올라오기
  // n - 2 에서 두칸 올라오기

  // dp[i] = i번째 계단까지 올라가는 방법의 수
  // dp[i] = dp[i - 1] + dp[i - 2]

  if (n === 1) return 1;
  if (n === 2) return 2;

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(solution(4));
console.log(solution(5));
