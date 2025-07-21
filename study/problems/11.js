// 선물 배분하기(정렬/투포인터)

function solution(m, v) {
  m.sort((a, b) => a - b);
  v.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let count = 0;

  while (i < m.length && j < v.length) {
    if (m[i] <= v[j]) {
      j++;
      i++;
      count++;
    } else {
      j++;
    }
  }
  return count;
}

console.log(solution([2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 11]));
console.log(solution([5, 10, 15], [5, 5]));
console.log(solution([2, 4], [1, 2, 3]));
