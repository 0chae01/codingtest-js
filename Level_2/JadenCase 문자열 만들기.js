function solution(s) {
  return s
    .split("")
    .map((word, i) => {
      if (i === 0) return word.toUpperCase();
      if (s[i - 1] === " ") return word.toUpperCase();
      return word.toLowerCase();
    })
    .join("");
}
