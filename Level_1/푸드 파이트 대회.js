function solution(food) {
  let arr = [];
  for (let i = 1; i < food.length; i++) {
    arr.push(i.toString().repeat(Math.floor(food[i] / 2)));
  }
  return arr.join("") + "0" + arr.reverse().join("");
}
