function solution(topping) {
  let count = 0;

  const leftMap = new Map();
  const rightMap = new Map();

  for (let i = 0; i < topping.length; i++) {
    rightMap.set(topping[i], (rightMap.get(topping[i]) || 0) + 1);
  }

  for (let i = 0; i < topping.length; i++) {
    leftMap.set(topping[i], (leftMap.get(topping[i]) || 0) + 1);
    if (rightMap.get(topping[i]) > 1) {
      rightMap.set(topping[i], rightMap.get(topping[i]) - 1);
    } else if (rightMap.get(topping[i]) === 1) {
      rightMap.delete(topping[i]);
    }

    if (leftMap.size === rightMap.size) count++;
  }

  return count;
}
