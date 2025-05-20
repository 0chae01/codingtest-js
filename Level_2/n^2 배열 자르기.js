function solution(n, left, right) {
    const answer = [];
    
    for (let i = left; i <= right; i++) {
        const row = Math.floor((i / n) + 1);
        const column = (i % n) + 1;
        answer.push(Math.max(row, column));
    }
    
    return answer;
}