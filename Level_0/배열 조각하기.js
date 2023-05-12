function solution(arr, query) {
  query.forEach((e, i) => {
    if (i % 2 === 0) arr.splice(e + 1);
    else arr.splice(0, e);
  });
  return arr;
}