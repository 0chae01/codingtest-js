function solution(number, limit, power) {
  let result = 0;
  let divisorArr = [];
  a: for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
      if (count > limit) {
        divisorArr.push(count);
        continue a;
      }
    }
    divisorArr.push(count);
  }
  divisorArr.sort((a, b) => a - b);
  let overIndex = divisorArr.findIndex((e) => e > limit);
  if (overIndex !== -1) {
    result += (number - overIndex) * power;
    divisorArr.splice(overIndex);
  }
  result += divisorArr.reduce((a, b) => a + b, 0);

  // a:for (let i = 1; i <= number; i++) {
  //     let count = 0;
  //     for (let j = 1; j <= i; j++) {
  //         if (i % j === 0) count++;
  //         if (count > limit) {
  //             result += power;
  //             continue a;
  //         }
  //     }
  //     result += count;
  // }
  return result;
}
