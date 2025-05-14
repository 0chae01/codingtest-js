function solution(ingredient) {
  const stack = [];
  const hamburger = "1231";

  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.slice(-4).join("").includes(hamburger)) {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      count++;
    }
  }

  return count;
}
