function solution(progresses, speeds) {
  // progresses: 배포 순서 (100 미만)
  // speeds(각 작업의 개발 속도) : 하루에 n%씩 작업 가능 (100 이하)
  // return 각 배포마다 몇 개의 기능이 배포되는지의 배열
  // 하루에 한번 하루 끝에 배포
  if (progresses.length === 0) return [];
  let queue = [];
  progresses.forEach((progress, i) => {
    if (100 - progress <= speeds[i]) {
      queue.push(1);
    } else {
      queue.push(Math.ceil((100 - progress) / speeds[i]));
    }
  });
  const answer = [];
  if ([...new Set(queue)].length === 1) return [queue.length];
  function foo(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        answer.push(arr.length);
        return;
      }
      if (arr[i] < arr[i + 1] && arr[i + 1] > n) {
        answer.push(i + 1);
        foo(arr.slice(i + 1), arr.slice(i + 1)[0]);
        return;
      } else continue;
    }
  }
  foo(queue, queue[0]);
  return answer;
}
