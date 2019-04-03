// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
var Node = function(val) {
  this.val = val;
  this.next = null;
};

var MinStack = function() {
  this.head = null;
};

MinStack.prototype.push = function(x) {
  if (!this.head) {
    this.head = new Node(x);
  } else {
    let old = this.head;
    this.head = new Node(x);
    this.head.next = old;
    if (x < this.min) this.min = x;
  }
};

MinStack.prototype.pop = function() {
  // need to get new minimum
  //   let head = this.head.val;
  this.head = this.head.next;
  //   return head;
  // question doesnt want to return anything
};

MinStack.prototype.top = function() {
  return this.head.val;
};

MinStack.prototype.getMin = function() {
  let min = this.head.val;
  let current = this.head;
  while (current.next) {
    current = current.next;
    if (current.val < min) min = current.val;
  }
  return min;
};

export default MinStack;

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
