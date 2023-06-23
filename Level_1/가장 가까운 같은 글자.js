function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    const idx = s.split("").splice(0, i).reverse().indexOf(s[i]);
    if (idx !== -1) {
      answer.push(idx + 1);
    } else answer.push(idx);
  }
  return answer;
}
