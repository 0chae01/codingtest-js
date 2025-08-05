function solution(s) {
  const lowerStr = s.toLowerCase();
  let pCnt = 0;
  let yCnt = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === "p") pCnt += 1;
    else if (lowerStr[i] === "y") yCnt += 1;
  }
  if (pCnt === yCnt) return true;
  else return false;
}
