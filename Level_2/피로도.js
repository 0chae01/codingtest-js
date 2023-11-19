function getPermutations(arr, n) {
  const results = [];
  if (n === 1) return arr.map((e) => [e]);
  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const permutations = getPermutations(rest, n - 1);
    const attached = permutations.map((e) => [fixed, ...e]);
    results.push(...attached);
  });
  return results;
}

function solution(k, dungeons) {
  const permutations = getPermutations(dungeons, dungeons.length);
  const counts = [];
  for (let i = 0; i < permutations.length; i++) {
    let num = k;
    for (let j = 0; j < permutations[i].length; j++) {
      const [require, minus] = permutations[i][j];
      if (j === permutations[i].length - 1 && require <= num) {
        counts.push(j + 1);
        break;
      }
      if (require > num) {
        counts.push(j);
        break;
      } else {
        num -= minus;
      }
    }
  }
  return Math.max(...counts);
}
