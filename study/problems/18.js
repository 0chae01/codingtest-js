// 도시의 안전 거리(BFS/그래프)

function solution(n, roads, start) {
  // 1. 인접리스트 방식으로 그래프 만들기
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of roads) {
    graph[a].push(b); // a->b로 가는 길
    graph[b].push(a); // b->a로 가는 길 (양방향 도로이므로)
  }

  // 방문여부 체크 배열
  const visited = Array(n + 1).fill(false);

  // 각 교차로까지의 거리
  const d = Array(n + 1).fill(0);

  // 2. bfs 탐색 시작
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();

    // 현재 교차로(node)와 연결된 모든 이웃 교차로 확인
    for (const next of graph[node]) {
      // 아직 방문하지 않은 교차로인 경우에만
      if (!visited[next]) {
        // 방문
        visited[next] = true;
        // 거리 + 1
        d[next] = d[node] + 1;
        // 다음 탐색 대상 지정
        queue.push(next);
      }
    }
  }

  // 3. 거리 배열 중에 가장 큰 값 반환
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
