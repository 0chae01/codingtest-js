// 탐험가의 보물 지도(이진트리/순회)

class Node {
  constructor(index, xpos) {
    this.xpos = xpos;
    this.index = index;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.preArr = [];
    this.postArr = [];
  }

  insert(index, xpos) {
    const newNode = new Node(index, xpos);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (xpos < currentNode.xpos) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  preOrder(node) {
    if (node !== null) {
      this.preArr.push(node.index);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.postArr.push(node.index);
    }
  }
}

function solution(treasureLocations) {
  const tree = new BinaryTree();
  const sortedNodes = treasureLocations
    .map((node, i) => [...node, i + 1])
    .sort((a, b) => b[1] - a[1]);

  sortedNodes.forEach((node) => {
    const [xpos, ypos, index] = node;
    tree.insert(index, xpos);
  });

  tree.preOrder(tree.root);
  tree.postOrder(tree.root);

  return [tree.preArr, tree.postArr];
}

console.log(
  solution([
    [6, 4],
    [12, 6],
    [14, 4],
    [4, 6],
    [7, 2],
    [2, 4],
    [9, 7],
    [8, 1],
    [3, 1],
  ])
);
console.log(
  solution([
    [10, 5],
    [5, 7],
    [15, 7],
    [2, 3],
    [7, 3],
    [12, 3],
    [20, 3],
  ])
);
