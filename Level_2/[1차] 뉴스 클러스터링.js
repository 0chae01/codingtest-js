// 두 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.
// 집합 A = {1, 2, 3}, 집합 B = {2, 3, 4}라고 할 때, 교집합 A ∩ B = {2, 3}, 합집합 A ∪ B = {1, 2, 3, 4}
// 집합 A, B 사이의 자카드 유사도 J(A, B) = 2/4 = 0.5
// 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1
const isString = (str) => /[A-Za-z]{2}/.test(str);

const getCount = (arr, str) => {
  let count = 0;
  return arr.filter((v) => v.toLowerCase() === str.toLowerCase()).length;
};

function solution(str1, str2) {
  const arr1 = [];
  for (let i = 0; i < str1.length - 1; i++) {
    if (isString(str1[i] + str1[i + 1])) arr1.push(str1[i] + str1[i + 1]);
  }

  const arr2 = [];
  for (let i = 0; i < str2.length - 1; i++) {
    if (isString(str2[i] + str2[i + 1])) arr2.push(str2[i] + str2[i + 1]);
  }

  // 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의한다.
  if (arr1.length === 0 && arr2.length === 0) return 65536;

  const allSet = new Set([
    ...arr1.map((e) => e.toLowerCase()),
    ...arr2.map((e) => e.toLowerCase()),
  ]);

  // 교집합
  const cap = [];
  // 합집합
  const cup = [];

  allSet.forEach((value) => {
    const min = Math.min(getCount(arr1, value), getCount(arr2, value));
    const max = Math.max(getCount(arr1, value), getCount(arr2, value));

    for (let i = 0; i < min; i++) {
      cap.push(value);
    }

    for (let i = 0; i < max; i++) {
      cup.push(value);
    }
  });

  if (cap.length === 0 && cup.length === 0) return 65536;
  return Math.trunc((cap.length / cup.length) * 65536);
}
