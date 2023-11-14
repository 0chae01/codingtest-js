// priorities 우선순위 : 큐에 있는 프로세스의 중요도가 순서대로 담긴 배열
// location 몇번째로 실행되는지 알고싶은 프로세스의 위치
function solution(priorities, location) {
  const processes = [...new Array(priorities.length)].map((_, i) => i);
  let count = 0;
  let answer;
  function checkPriority(priorityArr, processArr) {
    const targetPriority = priorityArr.shift();
    const targetProcess = processArr.shift();

    if (targetPriority < Math.max(...priorityArr)) {
      priorityArr.push(targetPriority);
      processArr.push(targetProcess);
      checkPriority(priorityArr, processArr);
    } else {
      count++;
      if (targetProcess === location) {
        answer = count;
        return;
      }
      checkPriority(priorityArr, processArr);
    }
  }
  checkPriority(priorities, processes);

  return answer;
}
