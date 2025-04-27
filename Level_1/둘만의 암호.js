function solution(s, skip, index) {
  const sCode = s.split("").map((a) => a.charCodeAt());
  const skipCode = skip.split("").map((a) => a.charCodeAt());
  const alphabetCodes = Array.from({ length: 26 }, (v, i) => {
    if (skipCode.indexOf(i + 97) === -1) return i + 97;
  }).filter((code) => code);

  const answerCode = [];
  for (let i = 0; i < sCode.length; i++) {
    const jumpedIndex = alphabetCodes.indexOf(sCode[i]) + index;
    answerCode.push(alphabetCodes[jumpedIndex % alphabetCodes.length]);
  }

  return answerCode.map((code) => String.fromCharCode(code)).join("");
}
