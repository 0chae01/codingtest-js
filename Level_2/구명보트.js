function solution(people, limit) {
  const sortedPeople = people.sort((a, b) => b - a);

  let answer = 0;
  let first = 0;
  let second = sortedPeople.length - 1;
  while (first <= second) {
    if (sortedPeople[first] <= limit / 2) {
      answer += Math.ceil((second + 1 - first) / 2);
      break;
    }

    answer++;

    if (sortedPeople[first] + sortedPeople[second] <= limit) {
      first++;
      second--;
      continue;
    } else {
      first++;
      continue;
    }
  }

  return answer;
}
