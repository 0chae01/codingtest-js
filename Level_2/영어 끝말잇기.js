function solution(n, words) {
  const WORD_RECORD = [];
  const WORD_MAP = {};

  let lastWord = words[0][0];
  for (let i = 0; i < words.length; i++) {
    const person = (i + 1) % n === 0 ? n : (i + 1) % n;
    if (words[i][0] !== lastWord || WORD_RECORD.indexOf(words[i]) !== -1) {
      return [person, (WORD_MAP[person]?.length || 0) + 1];
    }
    WORD_MAP[person] = [...(WORD_MAP[person] || []), words[i]];
    WORD_RECORD.push(words[i]);
    lastWord = words[i][words[i].length - 1];
  }

  return [0, 0];
}
