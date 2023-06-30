function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  function getScore(arr) {
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === arr[i % arr.length]) {
        count += 1;
      }
    }
    return count;
  }

  const scores = [getScore(one), getScore(two), getScore(three)];
  const highest = Math.max(...scores);
  let answer = [];
  scores.forEach((score, idx) => {
    if (score === highest) answer.push(idx + 1);
  });
  return answer;
}
