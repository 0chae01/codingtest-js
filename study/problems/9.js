// 무임승차 단속(정렬)

function solution(tickets) {
  if (!tickets.length) return 0;

  // 1. 하차 시각 기준으로 오름차순 정렬
  tickets.sort((a, b) => a[1] - b[1]);

  // 2. 첫번째 승객의 하차시각에 단속을 시작
  let inspections = 1;
  let inspectionTime = tickets[0][1]; // 첫승객의 하차 시각

  // 3. 모든 승색을 순회하면서 단속 필요 여부 판단
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] > inspectionTime) {
      inspections++;
      inspectionTime = tickets[i][1];
    }
  }

  return inspections;
}

console.log(
  solution([
    [8, 10],
    [3, 7],
    [1, 5],
    [2, 6],
  ])
);
console.log(
  solution([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
