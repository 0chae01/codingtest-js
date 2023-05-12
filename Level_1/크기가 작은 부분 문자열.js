function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
      if (Number(t.slice(i, i + p.length)) <= Number(p)) count++;
  }
  return count;
}