function solution(a, b, n) {
  let coke = n;
  let sum = 0;

  while (coke >= a) {
    const bonus = Math.floor(coke / a) * b;
    coke = coke - Math.floor(coke / a) * a + bonus;
    sum += bonus;
  }

  return sum;
}
