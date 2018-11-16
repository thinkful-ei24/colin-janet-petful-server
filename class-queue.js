class _Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null;
  }
}

class Queue {
  constructer() {
    this.first = null;
    this.last = null;
  }

  //removes from the queue
  dequeue() {
    if (!this.first) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  //adds to the queue
  enqueue(value) {
    const node = new _Node(value);

    if(this.first === null) {
      this.first = node;
    }

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }
}
