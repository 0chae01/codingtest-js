function solution(n, lost, reserve) {
  lost.sort();
  reserve.sort();

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      lost.splice(lost.indexOf(reserve[i]), 1, null);
      reserve.splice(i, 1, null);
    }
  }

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      const prev = reserve.indexOf(lost[i] - 1);
      reserve.splice(prev, 1, null);
      lost.splice(i, 1, null);
      continue;
    }

    if (reserve.includes(lost[i] + 1)) {
      const next = reserve.indexOf(lost[i] + 1);
      reserve.splice(next, 1, null);
      lost.splice(i, 1, null);
      continue;
    }
  }

  return n - lost.filter((e) => e).length;
}
