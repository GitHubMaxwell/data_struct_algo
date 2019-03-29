// QUEUE with arrays

// https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1395/
// enqueue = push();
// dequeue = shift();

function CircQueue(max) {
  this.length = 0;
  // current length of the queue INSIDE this.list
  this.maxLength = max;
  // maxLength allowed in this.list
  //   this.front = 0;
  this.front = -1;
  // this.front always starts from 0 ?? wrong?
  // index in this.list thats the front
  //   this.rear = 0;
  this.rear = -1;
  // index in this.list thats the rear
  // front rear better to start at -1 ??
  this.list = new Array(max);
  // this.list = new Array(max).fill();
  // whats fill() method
  // this.list = this.head ?
}

CircQueue.prototype.enqueue = function(value) {
  // Insert an element into the circular queue
  // iterate and find tail and reassign that
  if (!this.isFull()) {
    // this.rear; //?
    this.rear = (this.rear + 1) % this.maxLength;
    // this.rear; //?
    // QUESTION: why are we moving the ?
    this.list[this.rear] = value;
    // building the queue by appending the value to the rear
    // this.length = this.length + 1;
    this.length++;
    this; //?
    return true;
  }
  return false; //?
};

CircQueue.prototype.dequeue = function() {
  // Delete an element from the circular queue
  // delete current this.head and reassign this.head.next = this.head
  this.isEmpty(); //?
  //     if (isFull() == true) {
  //         return false;
  //     }
  //     if (isEmpty() == true) {
  //         head = 0;
  //     }
  //     tail = (tail + 1) % size;
  //     data[tail] = value;
  //     return true;
  // }
  if (!this.isEmpty()) {
    let temp = this.list[this.front];
    // this.list; //?
    // temp; //?
    // this.front; //?
    // need to reassign the current front element to and empty space? or rather by removing the this.front pointer it opens up that position in the array to be manipulated
    // this.list[this.front] = '';
    // QUESTION: why not just this.front + 1
    // what if the front is the last element in the array
    this.front = (this.front + 1) % this.maxLength;
    // this is the NEW front index
    // the way this works is that modulous is the remainder after a complete cycle of the array and the + 1 is the new position / this effectively handles if the head is the last item in the array and thus needs to be placed back from the point of the array
    // this.front; //?
    // (3 + 1) % this.maxLength; //?
    this.length--;
    // this; //?
    // reduce this.length by one
    // havent deleted the
    return temp; //?
  }
  return false;
};

CircQueue.prototype.Front = function() {
  // return this.head = which part of the array (index = this.front) have we assigned to act as the head
  return this.list[this.front];
};

CircQueue.prototype.Rear = function() {
  return this.list[this.rear];
};

CircQueue.prototype.isEmpty = function() {
  // return this.length !== this.maxLength;
  // not correct, this is just whether the array is completely full
  return this.length === 0;
};

CircQueue.prototype.isFull = function() {
  // if(this.length === this.maxLength) true;
  // return false;
  // above is wrong / the implicit
  // below from solution
  //   (this.rear + 1) % this.maxLength;//?
  //   this.front;//?
  return (this.rear + 1) % this.maxLength == this.front;
  //   return this.length === this.maxLength;
};

let newCQ = new CircQueue(3);
newCQ.enqueue(1); //?
newCQ.enqueue(2); //?
newCQ.enqueue(3); //?
newCQ.enqueue(4); //?
newCQ.Rear(); //?
newCQ.isFull(); //?
newCQ.dequeue(); //?
newCQ.enqueue(4); //?
newCQ.Rear(); //?
//
newCQ.list[0]; //?
newCQ.list[1]; //?
newCQ.list[2]; //?

export default CircQueue;
