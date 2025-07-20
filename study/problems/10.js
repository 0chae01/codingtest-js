// 최소한의 트럭 수송(정렬/투포인터)

function solution(weights, limit) {
  weights.sort((a, b) => a - b);

  let truck = 0;
  let left = 0;
  let right = weights.length - 1;

  while (left <= right) {
    if (weights[left] + weights[right] <= limit) {
      left++;
    }
    right--;
    truck++;
  }

  return truck;
}

console.log(solution([40, 50], 90));
console.log(solution([70, 50, 50, 30], 100));
console.log(solution([40, 50, 60, 90], 100));
console.log(solution([90, 90, 90, 90], 100));
