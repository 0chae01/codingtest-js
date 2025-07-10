class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  findNode(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length) {
      this.append(value);
      return;
    }
    const prevNode = this.findNode(index - 1);
    const nextNode = prevNode.next;

    const newNode = new Node(value);
    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.length--;
      return;
    }

    if (index >= this.length) return;

    const prevNode = this.findNode(index - 1);
    const removeNode = prevNode.next;
    const nextNode = removeNode.next;
    prevNode.next = nextNode;

    if (nextNode) {
      nextNode.prev = prevNode;
    } else {
      this.tail = prevNode;
    }
    this.length--;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const linkedList = new DoublyLinkedList("Dora");
linkedList.append("Sindy");
linkedList.append("Mary");
linkedList.printList();
linkedList.remove(1);
linkedList.printList();
linkedList.remove(1);
linkedList.printList();
