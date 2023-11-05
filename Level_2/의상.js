function solution(clothes) {
  const table = {};

  clothes.forEach((cloth) => {
    const [name, kind] = cloth;
    if (table[kind]) {
      table[kind].push(name);
    } else table[kind] = [name];
  });

  let count = 1;

  Object.values(table).forEach((arr) => {
    count *= arr.length + 1;
  });

  return count - 1;
}
