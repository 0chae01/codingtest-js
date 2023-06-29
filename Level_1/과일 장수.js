function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let price = 0;
  for (let i = 0; i + m <= score.length; i += m) {
    const box = score.slice(i, i + m);
    price += box[m - 1] * m;
  }
  return price;
}
