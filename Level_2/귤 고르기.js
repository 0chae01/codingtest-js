function solution(k, tangerine) {
  const countMap = {};
  for (let i = 0; i < tangerine.length; i++) {
    countMap[tangerine[i]] = countMap[tangerine[i]]
      ? countMap[tangerine[i]] + 1
      : 1;
  }

  const countEntry = Object.entries(countMap).sort((a, b) => b[1] - a[1]);

  let count = 0;
  for (let i = 0; i < countEntry.length; i++) {
    count += countEntry[i][1];
    if (count >= k) {
      return i + 1;
    }
  }
}
