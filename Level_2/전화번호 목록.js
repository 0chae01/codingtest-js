function solution(phone_book) {
  phone_book.sort();

  const isPrefix = phone_book.some((phone, idx) => {
    return phone_book[idx + 1]?.indexOf(phone) === 0;
  });

  return !isPrefix;
}
