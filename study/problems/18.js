// 도시의 안전 거리(BFS/그래프)

function solution(n, roads, start) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of roads) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = Array(n + 1).fill(false);
  const d = Array(n + 1).fill(0);

  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        d[next] = d[node] + 1;
        queue.push(next);
      }
    }
  }

  return Math.max(...d);
}

console.log(
  solution(
    6,
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 5],
      [5, 6],
      [4, 6],
    ],
    1
  )
);
console.log(
  solution(
    4,
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 2],
    ],
    1
  )
);
