function solution(brown, yellow) {
  const sum = brown + yellow;
  if (yellow === 1) return [3, 3];
  let width;
  for (let height = 3; height <= Math.sqrt(sum); height++) {
    if (sum % height === 0) {
      width = sum / height;
    } else continue;
    if (width <= 2 || width < height) continue;
    if (sum - (width - 2) * (height - 2) === brown) {
      return [width, height];
    }
  }
}
