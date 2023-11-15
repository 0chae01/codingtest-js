function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPermutations(arr, n) {
  const results = [];
  if (n === 1) return arr.map((e) => [e]);
  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const permutations = getPermutations(rest, n - 1);
    const attached = permutations.map((e) => [fixed, ...e]);
    results.push(...attached);
  });
  return results;
}

function solution(numbers) {
  const numArr = numbers.split("");
  const targetNums = [];
  for (let i = 1; i <= numbers.length; i++) {
    targetNums.push(...getPermutations(numArr, i));
  }
  const set = new Set();
  targetNums
    .map((arr) => Number(arr.join("")))
    .forEach((num) => {
      if (isPrime(num)) set.add(num);
    });

  return [...set].length;
}
