function solution(gems) {
  let getTypeLength = new Set(gems).size;
  let getCountMap = new Map();

  let start = 0;
  let minLength = gems.length + 1;
  let answer = [0, gems.length - 1];

  for (let end = 0; end < gems.length; end++) {
    getCountMap.set(gems[end], (getCountMap.get(gems[end]) || 0) + 1);

    while (getCountMap.size === getTypeLength) {
      if (end - start < minLength) {
        minLength = end - start;
        answer = [start + 1, end + 1];
      }

      getCountMap.set(gems[start], getCountMap.get(gems[start]) - 1);
      if (getCountMap.get(gems[start]) === 0) {
        getCountMap.delete(gems[start]);
      }
      start++;
    }
  }

  return answer;
}
