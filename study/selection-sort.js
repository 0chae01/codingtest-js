function selectionSort(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // let temp = array[i];
      // array[i] = array[minIndex];
      // array[minIndex] = temp;
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

console.log(selectionSort([1, 224, 4, 67, 88, 2, 1, 133]));
