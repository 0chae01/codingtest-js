function solution(elements) {
  const sum = [];
  function getSums(length, startIndex) {
    if (startIndex >= elements.length) return;

    let s = 0;
    for (let i = 0; i < length; i++) {
      const targetIndex = (startIndex + i) % elements.length;
      s += elements[targetIndex];
    }

    sum.push(s);
    getSums(length, startIndex + 1);
  }

  for (let i = 1; i <= elements.length; i++) {
    getSums(i, 0);
  }

  return [...new Set(sum)].length;
}
