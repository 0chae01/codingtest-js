const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution(maps) {
  let result = 0;
  function bfs(x, y, distance) {
    const queue = [[x, y, distance]];
    while (queue.length > 0) {
      const [cx, cy, distance] = queue.shift();
      if (cx === maps.length - 1 && cy === maps[0].length - 1) {
        return (result = distance);
      }

      for (let [x, y] of DIRECTIONS) {
        const nx = cx + x;
        const ny = cy + y;
        if (
          nx >= 0 &&
          nx < maps.length &&
          ny >= 0 &&
          ny < maps[0].length &&
          maps[nx][ny] === 1
        ) {
          maps[nx][ny] = 0;
          queue.push([nx, ny, distance + 1]);
        }
      }
    }
  }

  bfs(0, 0, 1);

  return result || -1;
}
