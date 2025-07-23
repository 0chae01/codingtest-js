// 우주 기지국 통신망(BFS)

function bfs() {
  const queue = [];
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.value);
    queue.push(...node.children);
  }
}

function solution(n, stations) {
  let answer = 0;
  const visited = Array.from({ length: n }, () => false);

  const queue = [];
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;
      queue.push(i);
      visited[i] = true;
    }

    while (queue.length > 0) {
      const x = queue.shift();

      // 현재 기지국 x와 연결된 다른 기지국 탐색
      for (let j = 0; j < n; j++) {
        if (stations[x][j] === 1 && !visited[j]) {
          queue.push(j);
          visited[j] = true;
        }
      }
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
