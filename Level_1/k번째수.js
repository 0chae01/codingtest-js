function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    const newArr = [...array].splice(
      commands[i][0] - 1,
      commands[i][1] - commands[i][0] + 1
    );
    newArr.sort((a, b) => a - b);
    result.push(newArr[commands[i][2] - 1]);
  }
  return result;
}
