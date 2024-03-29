function solution(number) {
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      // 해당하는 fixed를 제외한 나머지 뒤
      const rest = origin.slice(index + 1);
      // 나머지에 대해서 조합을 구한다.
      const combinations = getCombinations(rest, selectNumber - 1);
      // 돌아온 조합에 떼 놓은(fixed) 값 붙이기
      const attached = combinations.map((el) => [fixed, ...el]);
      // 배열 spread syntax 로 모두다 push
      results.push(...attached);
    });

    return results; // 결과 담긴 results return
  };

  let answer = 0;
  getCombinations(number, 3).forEach((arr) => {
    if (arr.reduce((a, b) => a + b, 0) === 0) answer++;
  });
  return answer;
}
