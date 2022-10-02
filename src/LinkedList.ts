import { Sorter } from "./Sorted";

class LinkedListNode {
  next: LinkedListNode | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: LinkedListNode | null = null;
  constructor() {
    super();
  }

  add(data: number): void {
    const node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    } else {
      let length = 1;
      let node = this.head;

      while (node.next) {
        length++;
        node = node.next;
      }
      return length;
    }
  }

  at(index: number): LinkedListNode {
    if (!this.head) {
      throw new Error("index is out of bounds");
    }

    let counter = 0;
    let node: LinkedListNode | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error("index is out of bounds");
  }

  compare(currentIndex: number, nextIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(currentIndex).data > this.at(nextIndex).data;
  }

  swap(currentIndex: number, nextIndex: number): void {
    const currentNode = this.at(currentIndex);
    const nextNode = this.at(nextIndex);

    const leftHand = currentNode.data;
    currentNode.data = nextNode.data;
    nextNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: LinkedListNode | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
