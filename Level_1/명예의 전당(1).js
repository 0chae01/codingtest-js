function solution(k, score) {
  let result = [];
  for (let i = 1; i <= score.length; i++) {
    const honor = score
      .slice(0, i)
      .sort((a, b) => b - a)
      .slice(0, k);
    result.push(Math.min(...honor));
  }
  return result;
}
