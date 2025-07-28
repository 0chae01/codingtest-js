// 도둑의 최적 전략(DP)

function solution(money) {
  // dp[i] = i번째 집까지 봤을 때 훔칠 수 있는 최대 금액
  // 1. i번째 집을 털지 않는다.
  // -> dp[i] = dp[i - 1];
  // 2. i번째 집을 턴다.
  // -> dp[i] = dp[i - 2] + money[i];
  // dp[i] = Math.max(dp[i - 1], dp[i - 2] + money[i]);

  const n = money.length;

  if (n === 0) return 0;
  if (n === 1) return money[0];

  const dp = Array(n).fill(0);

  dp[0] = money[0];
  dp[1] = Math.max(money[0], money[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + money[i]);
  }

  return dp[n - 1];
}

console.log(solution([2, 7, 9, 3, 1]));
console.log(solution([1, 2, 3, 1]));
console.log(solution([5, 1, 1, 5]));
