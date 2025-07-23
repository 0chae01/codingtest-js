// 바이러스 감염 구역(BFS)

const direction = [
  [-1, 0], // 상
  [1, 0], // 하
  [0, -1], // 좌
  [0, 1], // 우
];

function solution(maps) {
  const visited = Array.from({ length: maps.length }, () =>
    Array.from({ length: maps[0].length }, () => false)
  );
  const result = [];

  function bfs(maps, x, y) {
    const queue = [[x, y]];
    let groupCount = Number(maps[x][y]);
    visited[x][y] = true;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + direction[i][0];
        const ny = y + direction[i][1];

        if (
          nx >= 0 &&
          nx < maps.length &&
          ny >= 0 &&
          ny < maps[0].length &&
          maps[nx][ny] !== "X" &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          groupCount += Number(maps[nx][ny]);
        }
      }
    }
    return groupCount;
  }

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        const count = bfs(maps, i, j);
        result.push(count);
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : -1;
}

console.log(solution(["X426X", "3X5X1", "XXX23", "7XX17"]));
console.log(solution(["X1X2X", "X1X2X", "X1X2X"]));
console.log(solution(["XXX", "XXX", "XXX"]));
