function solution(n) {
  let primeArr = [];
  a: for (let i = 2; i <= n; i++) {
    if (i === 2) {
      primeArr.push(2);
      continue;
    }
    for (let j = 0; j < primeArr.length; j++) {
      if (primeArr[j] > Math.sqrt(i)) {
        break;
      }
      if (i % primeArr[j] === 0) {
        continue a;
      }
    }
    primeArr.push(i);
  }
  return primeArr.length;
}
