// given a linked list, reverse it in place
// can be done iteratively or recursively

// ALGO
// iterate over linked list
// two pointers
// left pointer next (originally pointer to node) change to n

function reverseList(head) {
  let current = head;
  current.next; //?
  current.head; //?

  // current is the center and left and current stay on
  let left, right;
  // if
  while (current.next) {
    if (current.head) {
      // right store current.next.next
      // center store current.next
      // left = current
      // re assign current.head to null
      //
    } else {
    }
    current = current.next;
  }

  return head;
}

export default reverseList;
