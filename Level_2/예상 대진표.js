function solution(n, a, b) {
  let roundCount = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    roundCount++;
  }

  return roundCount;
}
