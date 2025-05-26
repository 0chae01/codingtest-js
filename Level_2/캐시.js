function solution(cacheSize, cities) {
  const queue = [];

  if (cacheSize === 0) return cities.length * 5;

  let count = 0;
  for (let i = 0; i < cities.length; i++) {
    if (queue.indexOf(cities[i].toLowerCase()) !== -1) {
      count += 1;
      queue.splice(queue.indexOf(cities[i].toLowerCase()), 1);
      queue.unshift(cities[i].toLowerCase());
    } else {
      count += 5;
      if (queue.length === cacheSize) {
        queue.pop();
      }
      queue.unshift(cities[i].toLowerCase());
    }
  }

  return count;
}
