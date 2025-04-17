function solution(arr) {
  arr.sort((a, b) => b - a);
  a: for (let i = 1; ; i++) {
    const num = arr[0] * i;
    for (let j = 1; j < arr.length; j++) {
      if (num % arr[j] !== 0) continue a;
    }
    return num;
  }
}
