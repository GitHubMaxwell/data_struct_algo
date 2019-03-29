// Circular Singly Link List

// FEATURES
// --MyCircularQueue(k): Constructor, set the size of the queue to be k.
// --Front: Get the front item from the queue. If the queue is empty, return -1.
// --Rear: Get the last item from the queue. If the queue is empty, return -1.
// --enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
// --deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
// --isEmpty(): Checks whether the circular queue is empty or not.
// --isFull(): Checks whether the circular queue is full or not.

// this is using a LINK LIST = maybe better to
class CircNode {
  constructor(val) {
    this.val = val;
    // to make it circular
    this.tail = true;
    this.next = null;
  }
}
class CircularQueue {
  // when you make the circular queue you hav to make all of it
  constructor(max) {
    this.length = 0;
    this.maxLength = max;
    this.head = null;
  }

  enqueue(val) {
    if (!this.head) {
      this.head = new CircNode(val);
      this.length = this.length + 1;
      // QUESTION: why doesnt this.length++ work?
    } else if (this.length === this.maxLength) {
      val; //?
      return false;
    } else {
      let current = this.head;
      // QUESTION: why assigning this.next to this.head doesnt work = undefined and prevents this
      while (!current.tail) {
        current = current.next;
      }
      current.tail = false;
      // set current (last tail) tail to false because when you make a new node that will be the new tail automatically
      current.next = new CircNode(val);
      //   current.next.next; //?
      current.next.next = this.head; //?
      // makes it circular
      this.length = this.length + 1;
      //   return true;
    }
  }
  dequeue() {
    if (!this.head) return 'No Queue';
    this.head = this.head.next;
    this.length = this.length - 1;
  }
  front() {
    // return the front of the queue = this.head
    if (!this.head) return -1;
    return this.head.val;
  }
  rear() {
    if (!this.head) return -1;
    let current = this.head;
    // while the current node isnt the tail keep iterating
    while (current.tail !== true) {
      // while (current.next) {
      current = current.next;
    }
    this; //?
    // current;
    return current.val;
  }
  isEmpty() {
    if (!this.head) return true;
    return false;
  }
  isFull() {
    if (this.head) return true;
    return false;
  }
}

let newCQ = new CircularQueue(5);
// how to make this all empty from the start and dynamically change the tail
newCQ.enqueue(2);
newCQ.enqueue(3);
newCQ.enqueue(4);
newCQ.enqueue(5);
newCQ.enqueue(6);
newCQ.dequeue();
newCQ.enqueue(777);
newCQ.front(); //?
newCQ.rear(); //?
newCQ.isEmpty(); //?
newCQ.isFull(); //?
newCQ.head; //?
// newCQ.front(); //?
// newCQ.rear(); //?
// newCQ;
// newCQ.head.val; //?
// newCQ.head.next.val; //?
// newCQ.head.next.next.val; //?
// newCQ.head.next.next.next.val; //?
// newCQ.head.next.next.next.next.val; //?
// newCQ.head.next.next.next.next.next.val; //?
// newCQ.head.next.next.next.next.next.next.val; //?
// newCQ.head;//?
// newCQ.head;//?
// console.log(JSON.stringify(newCQ));
