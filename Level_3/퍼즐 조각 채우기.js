function solution(game_board, table) {
  function moveBlock(blocks) {
    const minX = Math.min(...blocks.map((block) => block[0]));
    const minY = Math.min(...blocks.map((block) => block[1]));

    return blocks.map((block) => [block[0] - minX, block[1] - minY]).sort();
  }

  function rotate(blocks) {
    // y=x축 대칭 이동
    const max = Math.max(...blocks.map((block) => Math.max(...block)));
    const rotatedBlocks = blocks.map((block) => [max - block[1], block[0]]);

    return moveBlock(rotatedBlocks);
  }

  // start: 시작점
  // table: 게임판
  // k: 칸 타겟 상태 0 | 1
  function bfs(start, table, k) {
    const queue = [start];
    const blocks = [];

    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    while (queue.length) {
      const [cx, cy] = queue.shift();
      blocks.push([cx, cy]);
      table[cx][cy] = k;

      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < table.length &&
          ny < table.length &&
          table[nx][ny] !== k
        ) {
          queue.push([nx, ny]);
          table[nx][ny] = k;
        }
      }
    }

    return moveBlock(blocks);
  }

  const blanks = [];
  const blocks = [];

  for (let i = 0; i < game_board.length; i++) {
    for (let j = 0; j < game_board.length; j++) {
      if (game_board[i][j] === 0) {
        blanks.push(bfs([i, j], game_board, 1));
      }
    }
  }

  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      if (table[i][j] === 1) {
        blocks.push(bfs([i, j], table, 0));
      }
    }
  }

  let answer = 0;

  // 모든 블록들을 빈칸들에 비교하기
  // rotate 4회 90도씩
  blocks.forEach((block) => {
    for (let i = 0; i < blanks.length; i++) {
      let match = false;
      for (let j = 0; j < 4; j++) {
        block = rotate(block);
        if (JSON.stringify(block) === JSON.stringify(blanks[i])) {
          blanks.splice(i, 1); // 일치한 건 지우기
          answer += block.length; // 블록수만큼 answer에 더해주기
          match = true;
          break;
        }
      }
      if (match) break;
    }
  });

  return answer;
}
