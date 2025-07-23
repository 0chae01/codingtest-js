// 탐사 로봇의 귀환 경로(BFS)

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 거리 기록용 2차원 배열
  // 방문할 때마다 1씩 더해주고, 목표 위치의 최종 숫자를 리턴
  const d = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  /* 방향 solution 1 */
  // index 0 : 위
  // index 1 : 오른쪽
  // index 2 : 아래
  // index 3 : 왼쪽
  // const dx = [-1, 0, 1, 0];
  // const dy = [0, 1, 0, -1];

  /* 방향 solution 2 */
  // 상,하,좌,우 순서 [x, y];
  const direction = [
    [-1, 0], // 상
    [1, 0], // 하
    [0, -1], // 좌
    [0, 1], // 우
  ];

  const queue = [[0, 0]];

  // 시작 위치는 1
  d[0][0] = 1;
  // 지나온 곳은 다시 가지 못하도록 0으로 초기화
  maps[0][0] = 0;

  // bfs
  while (queue.length) {
    let [x, y] = queue.shift();

    // 위, 아래, 좌, 우 4가지 방향으로 갈 수 있는지 탐색
    for (let k = 0; k < 4; k++) {
      /* 방향 solution 1 */
      // let nx = x + dx[k];
      // let ny = y + dy[k];

      /* 방향 solution 2 */
      let nx = x + direction[k][0];
      let ny = y + direction[k][1];

      // 지도 범위 안에 있는지 & 이동 가능한 칸인지 확인
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        queue.push([nx, ny]);
        // 다시 방문하지 않도록 0으로 초기화
        maps[nx][ny] = 0;
        // 거리 기록용 배열 다음칸에 기존 칸 number보다 1 더해주기
        d[nx][ny] = d[x][y] + 1;
      }
    }
  }

  return d[n - 1][m - 1] || -1;
}

console.log(
  solution([
    [1, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
  ])
);
