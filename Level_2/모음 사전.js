const VOWELS = ["A", "E", "I", "O", "U"];

function solution(word) {
  const dictionary = [];

  const dfs = (current, length) => {
    if (length > 5) return;
    dictionary.push(current);
    for (let i = 0; i < VOWELS.length; i++) {
      dfs(current + VOWELS[i], length + 1);
    }
  };

  dfs("", 0);

  return dictionary.indexOf(word);
}
