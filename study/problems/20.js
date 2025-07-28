// 컨베이어벨트 자동 처리(우선순위큐와 힙)

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let min = index;

      if (left < length && this.heap[left] < this.heap[min]) {
        min = left;
      }
      if (right < length && this.heap[right] < this.heap[min]) {
        min = right;
      }
      if (min === index) break;

      this.swap(index, min);
      index = min;
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.heapifyDown();
    return min;
  }
}

function solution(T, R, times) {
  // 자동 처리 모드를 쓸 후보인 가장 큰 R개를 힙에 남긴다.
  // 하나씩 힙에 넣고 난 후, 힙 크기가 R보다 큰 경우 최소값 제거, 제거된 최소값들의 합 누적
  // 넣으면서 누적 시간이 T보다 커지는 경우, 여태까지 처리한 횟수 반환
  const minHeap = new MinHeap();
  let resourceUsed = 0;

  for (let i = 0; i < times.length; i++) {
    minHeap.insert(times[i]);

    if (minHeap.heap.length > R) {
      resourceUsed += minHeap.extractMin();
    }

    if (resourceUsed > T) {
      return i;
    }
  }

  return times.length;
}

console.log(solution(12, 2, [6, 3, 5, 8, 2, 4]));
console.log(solution(5, 3, [10, 20, 30]));
