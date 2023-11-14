function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    if (i === prices.length - 1) {
      answer.push(0);
      return answer;
    }
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) break;
    }
    answer.push(count);
  }
}
