function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    // 탈출조건
    if (index === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    // 수행동작
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}
