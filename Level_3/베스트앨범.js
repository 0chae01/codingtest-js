function solution(genres, plays) {
  const map = new Map();
  const genreSum = {};
  for (let i = 0; i < plays.length; i++) {
    if (map.get(genres[i])) {
      map.set(
        genres[i],
        [...map.get(genres[i]), [i, plays[i]]].sort((a, b) => b[1] - a[1])
      );
      genreSum[genres[i]] += plays[i];
    } else {
      map.set(genres[i], [[i, plays[i]]]);
      genreSum[genres[i]] = plays[i];
    }
  }
  const genre = Object.entries(genreSum).sort((a, b) => b[1] - a[1]);

  let answer = [];

  for (let value of genre) {
    answer.push(
      map
        .get(value[0])
        .map((e) => e[0])
        .slice(0, 2)
    );
  }

  return answer.flat();
}
