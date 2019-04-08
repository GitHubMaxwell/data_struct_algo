// https://leetcode.com/problems/min-stack/discuss/222236/JavaScript-O(1)-Time
// the above solution is with arrays and has O(1) everything

// my solution is with implementing a link list
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
  // each node basically holds the min value so you might as well hold it in the head node
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
