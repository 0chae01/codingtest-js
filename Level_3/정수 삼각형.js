function solution(triangle) {
  for (let i = triangle.length - 1; i > 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i - 1][j] += Math.max(
        triangle[i]?.[j] || 0,
        triangle[i]?.[j + 1] || 0
      );
    }
  }
  return triangle[0][0];
}
