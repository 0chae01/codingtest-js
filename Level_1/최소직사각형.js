function solution(sizes) {
  // 각 원소 배열을 오름차순 정렬
  sizes.forEach((size, idx) => {
    sizes[idx] = size.sort((a, b) => a - b);
  });

  // 각 원소 배열의 0번째와 1번째 요소만 추출해 width, height 배열로 만들기
  const width = sizes.map((size) => size[0]);
  const height = sizes.map((size) => size[1]);

  // 최대값끼리 곱하기
  return Math.max(...width) * Math.max(...height);
}
