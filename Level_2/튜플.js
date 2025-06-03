function solution(s) {
  const str = s
    .slice(2, s.length - 2)
    .split("},{")
    .sort((a, b) => a.length - b.length)
    .join();
  return [...new Set(str.split(","))].map(Number);
}
