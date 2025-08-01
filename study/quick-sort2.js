function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function partition(array, left, right) {
  const pivotValue = array[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (array[j] < pivotValue) {
      swap(array, i, j);
      i++;
    }
  }

  swap(array, i, right);
  return i;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }

  return array;
}

console.log(quickSort([5, 3, 1, 4, 9, 7, 2, 6, 8, 0]));
