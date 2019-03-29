class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue(val) {
    if (!this.head) {
      this.head = new Node(val);
    } else {
      let current = this.head;
      while (current.next) {
        // QUESTION: why are there cases in LL that we use current.next in the whil loop and sometimes just current
        current = current.next;
      }
      current.next = new Node(val);
      this.length = this.length + 1;
    }
  }

  dequeue() {
    if (!this.head) {
      return 'No Queue';
    } else {
      this.head = this.head.next;
    }
  }
}

let newQ = new Queue();
newQ.enqueue(1);
newQ.enqueue(2);
newQ.enqueue(3);
newQ.dequeue();
console.log(JSON.stringify(newQ));
