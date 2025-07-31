const DIRECTIONS = {
  U: [0, -1],
  D: [0, 1],
  R: [1, 0],
  L: [-1, 0],
};

const LIMIT = 11;

function solution(dirs) {
  const visited = {};
  let count = 0;
  let move = 0;
  const queue = [[5, 5]];

  while (queue.length) {
    const [cx, cy] = queue.shift();
    if (move >= dirs.length) break;
    const nx = cx + DIRECTIONS[dirs[move]][0];
    const ny = cy + DIRECTIONS[dirs[move]][1];

    move++;
    if (nx >= 0 && nx < LIMIT && ny >= 0 && ny < LIMIT) {
      if (visited[`${cx}${cy}${nx}${ny}`] !== true) {
        visited[`${cx}${cy}${nx}${ny}`] = true;
        visited[`${nx}${ny}${cx}${cy}`] = true;
        count++;
      }
      queue.push([nx, ny]);
    } else {
      queue.push([cx, cy]);
    }
  }

  return count;
}
