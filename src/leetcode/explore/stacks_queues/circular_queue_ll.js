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
    this.queue = null;
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    if (!this.queue) {
      this.queue = new CircNode(val);
      this.length = this.length + 1;
      this.front = val;
      this.rear = val;
      // QUESTION: why doesnt this.length++ work?
    } else if (this.length === this.maxLength) {
      val; //?
      return false;
    } else {
      let current = this.queue;
      // QUESTION: why assigning this.next to this.queue doesnt work = undefined and prevents this
      while (!current.tail) {
        current = current.next;
      }
      current.tail = false;
      // set tail to this.queue;
      // set current (last tail) tail to false because when you make a new node that will be the new tail automatically
      current.next = new CircNode(val);
      current.next.tail = this.queue;
      // current.next.tail; //?
      current.next.next = this.queue; //?
      // makes it circular
      this.rear = current.next.val; //?

      this.length = this.length + 1;
      //   return true;
    }
  }
  dequeue() {
    if (!this.queue) return 'No Queue';
    let temp = this.queue.val; //?
    this.queue = this.queue.next;
    this.tail; //?
    this.queue; //?
    let othe = this.queue.val; //?
    // reassign this.tail and this.rear;
    this.front = this.queue.val; //?
    this.length = this.length - 1; //?
    return temp;
  }
  qFront() {
    // return the front of the queue = this.head
    // if (!this.queue) return -1;
    return this.front || -1;
  }
  qRear() {
    // if (!this.head) return -1;
    // let current = this.head;
    // // while the current node isnt the tail keep iterating
    // while (current.tail !== true) {
    //   // while (current.next) {
    //   current = current.next;
    // }
    // this; //?
    // // current;
    // return current.val;
    return this.rear || -1;
  }
  isEmpty() {
    // if (!this.queue) return true;
    // return false;
    return this.length === 0 ? true : false;
  }
  isFull() {
    // if (this.queue) return true;
    // return false;
    // above only checks if theres a queue
    return this.length === this.maxLength;
  }
}

let newCQ = new CircularQueue(5);
// how to make this all empty from the start and dynamically change the tail
newCQ.dequeue(); //?
newCQ.enqueue(2);
newCQ.enqueue(3);
newCQ.enqueue(4);
newCQ.enqueue(5);
newCQ.enqueue(6);
newCQ.enqueue(777); //?
newCQ.dequeue(); //?
newCQ.dequeue(); //?
newCQ.dequeue(); //?
newCQ.dequeue(); //?
newCQ.dequeue(); //?
// newCQ.dequeue();//?
// newCQ.dequeue();//?
// newCQ.dequeue();//?
// newCQ.dequeue();//?
// newCQ.dequeue();//?
// newCQ.dequeue();//?
newCQ.queue; //?
newCQ.qFront(); //?
newCQ.qRear(); //?
// newCQ.isEmpty(); //?
// newCQ.isFull(); //?
// newCQ.qRear(); //?
// newCQ.queue; //?
// newCQ.front(); //?
// newCQ.rear(); //?
// newCQ;
newCQ.queue.val; //?
newCQ.queue.next.val; //?
newCQ.queue.next.next.val; //?
newCQ.queue.next.next.next.val; //?
newCQ.queue.next.next.next.next.val; //?
newCQ.queue.next.next.next.next.next.val; //?
newCQ.queue.next.next.next.next.next.next.val; //?
newCQ.queue.tail; //?
newCQ.queue.next.tail; //?
newCQ.queue.next.next.tail; //?
newCQ.queue.next.next.next.tail; //?
newCQ.queue.next.next.next.next.tail; //?
newCQ.queue.next.next.next.next.next.tail; //?
newCQ.queue.next.next.next.next.next.next.tail; //?
// newCQ.head;//?
// newCQ.head;//?
// console.log(JSON.stringify(newCQ));
