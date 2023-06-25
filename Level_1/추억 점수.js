function solution(name, yearning, photo) {
  const scoreObj = {};
  for (let i = 0; i < name.length; i++) {
    scoreObj[name[i]] = yearning[i];
  }

  const answer = photo.map((e) => {
    let score = 0;
    e.forEach((person) => {
      if (name.indexOf(person) !== -1) {
        score += scoreObj[person];
      }
    });
    return score;
  });

  return answer;
}
