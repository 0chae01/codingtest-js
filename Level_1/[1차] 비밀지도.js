function solution(n, arr1, arr2) {
  const binArr1 = arr1.map((e) => {
    return "0".repeat(n - e.toString(2).length) + e.toString(2);
  });
  const binArr2 = arr2.map((e) => {
    return "0".repeat(n - e.toString(2).length) + e.toString(2);
  });
  let answer = [];
  for (let i = 0; i < n; i++) {
    let arr = "";
    for (let j = 0; j < n; j++) {
      if (Number(binArr1[i][j]) + Number(binArr2[i][j]) !== 0) {
        arr += "#";
      } else arr += " ";
    }
    answer.push(arr);
  }
  return answer;
}
