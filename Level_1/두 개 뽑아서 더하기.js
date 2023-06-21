function solution(numbers) {
  const getCombinations = function (arr, selectNumber) {
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
  const result = getCombinations(numbers, 2).map((e) => e[0] + e[1]);
  const answer = [...new Set(result)].sort((a, b) => a - b);
  return answer;
}
