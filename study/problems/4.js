// 명령어 수행하기(큐)

function solution(commands) {
  const queue = [];
  const answer = [];

  for (const str of commands) {
    const [action, value] = str.split(" ");
    if (action === "ENQUEUE") queue.push(Number(value));
    else if (action === "DEQUEUE")
      answer.push(queue.length ? queue.shift() : "EMPTY");
  }

  return answer;
}

console.log(
  solution(["ENQUEUE 3", "ENQUEUE 5", "DEQUEUE", "DEQUEUE", "DEQUEUE"])
);
