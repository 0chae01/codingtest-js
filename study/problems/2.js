// 성문 열고 닫기 (스택)

function solution(gate) {
    const stack = [];

    for (const char of gate) {
        const top = stack[stack.length - 1];
        if ((top === '<' && char === '>')) {
            stack.pop();
        } else stack.push(char);
    }

    return stack.length === 0;
}

function solution2(gate) {
    const stack = [];

    for (const char of gate) {
        if (char === '<') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

console.log(solution("<<>>"));
console.log(solution("<<>>"));
console.log(solution(">><<"));
console.log(solution("<<<>"));