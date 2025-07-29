// 동전 교환하기(DP)

function solution(coins, amount) {
  // dp[x] = x를 만들기 위해 필요한 최소 동전 개수
  // x = (x - coin) + coin

  // coin = 마지막 동전
  // dp[x] = Math.min(dp[x], dp[x - coin] + 1);

  const dp = Array(amount + 1).fill(amount + 1);
  // 1원만 있어서 모든 금액을 1원 => amount

  dp[0] = 0;
  for (let x = 1; x <= amount; x++) {
    for (const coin of coins) {
      if (x - coin >= 0) {
        dp[x] = Math.min(dp[x], dp[x - coin] + 1);
      }
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
}

console.log(solution([1, 2, 5], 11));
console.log(solution([2], 3));
console.log(solution([1], 0));
