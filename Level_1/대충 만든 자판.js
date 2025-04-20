function solution(keymap, targets) {
  const scoreMap = {};
  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      if (!scoreMap[keymap[i][j]]) scoreMap[keymap[i][j]] = j + 1;
      else
        scoreMap[keymap[i][j]] =
          j + 1 < scoreMap[keymap[i][j]] ? j + 1 : scoreMap[keymap[i][j]];
    }
  }

  const answer = [];

  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    for (let j = 0; j < targets[i].length; j++) {
      count += scoreMap[targets[i][j]];
    }
    answer.push(count || -1);
  }

  return answer;
}
