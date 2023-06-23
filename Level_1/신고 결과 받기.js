function solution(id_list, report, k) {
  const resultObj = {};
  id_list.forEach((id) => {
    resultObj[id] = 0;
  });

  const reportArr = [...new Set(report)];
  const reportObj = {};
  for (let i = 0; i < reportArr.length; i++) {
    const [a, b] = reportArr[i].split(" "); // a가 b를 신고
    if (reportObj[b]) {
      reportObj[b].push(a);
    } else reportObj[b] = [a];
  }

  const bs = Object.keys(reportObj);
  for (let i = 0; i < bs.length; i++) {
    if (reportObj[bs[i]].length >= k) {
      reportObj[bs[i]].forEach((id) => {
        resultObj[id] += 1;
      });
    }
  }
  return Object.values(resultObj);
}
