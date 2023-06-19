function solution(s) {
  const numberObj = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const numArr = Object.keys(numberObj);
  for (let i = 0; i < numArr.length; i++) {
    if (s.includes(numArr[i])) {
      s = s.replaceAll(numArr[i], numberObj[numArr[i]]);
    }
  }
  return Number(s);
}
