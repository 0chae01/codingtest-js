// 두 줄 대기열에서 짝수 번호 뽑기(큐)

function solution(queue1, queue2, k) {
  const result = [];
  const arr = [...queue1, ...queue2];

  for (let i = 0; i < arr.length; i++) {
    if (result.length === k) return result;
    if (arr[i] % 2 === 0) result.push(arr[i]);
    else arr.push(arr[i]);
    arr.shift();
    i--;
  }
}

function solution2(queue1, queue2, k) {
  const queue = [...queue1, ...queue2];
  const result = [];

  while (result.length < k && queue.length > 0) {
    const person = queue.shift();

    if (person % 2 === 0) result.push(person);
    else queue.push(person);
  }

  return result;
}

console.log(solution([1, 3, 4], [6, 5, 8], 3));
