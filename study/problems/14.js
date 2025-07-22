// 우주 기지국 통신망(DFS)

function solution(n, stations) {
  let answer = 0;

  let visited = Array.from({ length: n }, () => false);

  function dfs(station) {
    visited[station] = true;
    for (let i = 0; i < n; i++) {
      if (stations[station][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ])
);
console.log(
  solution(4, [
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 0, 1, 1],
  ])
);
