// 랭킹 태그 부여하기(정렬)

function solution(score) {
  const sorted = score
    .map((s, index) => [s, index])
    .sort((a, b) => b[0] - a[0]);

  const n = score.length;
  const answer = Array(n);

  for (let rank = 0; rank < n; rank++) {
    const index = sorted[rank][1];

    if (rank < 3) {
      answer[index] = `Top ${rank + 1}`;
    } else {
      answer[index] = `Rank ${rank + 1}`;
    }
  }

  return answer;
}

console.log(solution([95, 85, 90, 70]));
console.log(solution([50, 100, 75]));
