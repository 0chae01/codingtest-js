const getCombinations = (arr, selectNumber) => {
  if (selectNumber === 1) return arr.map((el) => [el]);

  const results = [];
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};
