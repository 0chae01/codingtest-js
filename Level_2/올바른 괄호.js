function solution(s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  s.split("").forEach((bracket) => {
    if (bracket === "[" || bracket === "(" || bracket === "{") {
      stack.push(bracket);
    } else {
      if (
        (bracket === "]" && stack[stack.length - 1] === "[") ||
        (bracket === ")" && stack[stack.length - 1] === "(") ||
        (bracket === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.pop();
      } else return false;
    }
  });

  return stack.length === 0 ? true : false;
}
