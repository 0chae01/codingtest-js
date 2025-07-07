// 알파벳 폭발(스택)

function solution(s) {
    const stack = [];
    for (const char of s) {
        const top = stack[stack.length - 1] || '';
        // Math.abs(top.charCodeAt() - s.charCodeAt()) === 32 이면 같은 문자임을 활용하는 방법도 있음
        if (top.toLowerCase() === char.toLowerCase()) {
            stack.pop();
        } else stack.push(char);
    }
    return stack.join('');
}

console.log(solution("infFflearn"));
console.log(solution("aAbBcC"));
console.log(solution("xYyX"));
console.log(solution("a"));
console.log(solution("Code"));