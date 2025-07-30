const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const getCount = (targetArr, inputArr) => {
  const targetSet = new Set(targetArr);
  let count = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (targetSet.has(inputArr[i])) count++;
  }
  return count;
};

function solution(n, q, ans) {
  const numbers = Array.from({ length: n }, (v, i) => i + 1);

  const combinations = getCombinations(numbers, 5);

  let answer = 0;
  a: for (let i = 0; i < combinations.length; i++) {
    for (let j = 0; j < q.length; j++) {
      if (getCount(combinations[i], q[j]) !== ans[j]) continue a;
    }
    answer++;
  }

  return answer;
}
