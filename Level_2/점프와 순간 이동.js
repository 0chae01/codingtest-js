function solution(n) {
  let number = n;
  let count = 0;

  while (number > 0) {
    if (number % 2 === 0) {
      number /= 2;
    } else {
      number -= 1;
      count += 1;
    }
  }

  return count;
}
