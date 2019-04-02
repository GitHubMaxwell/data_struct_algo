// given a linked list, reverse it in place
// can be done iteratively or recursively
import fLL from '../../utils/linkListFast';

// ALGO
// iterate over linked list
// two pointers
// left pointer next (originally pointer to node) change to n
// temp
// current
// current.next
// current.next.next
// function reverseList(head) {
//   let current = head;
//   current.next; //?
//   current.head; //?

//   // current is the center and left and current stay on
//   //   let left, center, right;
//   let temp;
//   while (current.next) {
//     //   right = current.next.next;
//     //   center = current.next;

//     if (current.head) {
//       // we are starting at the head
//       temp = current.next;
//       current.next = null;
//     } else {
//       temp = current.next;
//       current.next;
//     }
//     current = current.next;
//   }

//   return head;
// }

// VER.2 not mine
// var reverseList = function(head) {
//   let prev = null;
//   let cur = head;
//   let next = null;
//   if (!head) return;

//   while (cur) {
//     next = cur.next;
//     // save the whole linked list one node ahead

//     cur.next = prev;
//     // re assign cur.next to prev

//     prev = cur;
//     // re assign prev to cur
//     // move prev forward once

//     cur = next;
//     // move cur forward one
//     // specifically to
//   }
//   // we have to return the LL from prev not cur so space is O(n)
//   return prev;
// };

// VER.3
// iterate through LL from head to tail and stack values
// then create a new LL from the stack
// but this isnt in place and this is iterative
// whats the recursive way

// function reverseList(head) {
//   let stack = [];
//   let current = head;
//   while (current) {
//     stack.unshift(current.val);
//     current = current.next;
//   }
//   let newLL = new fLL();
//   newLL.append(stack);
//   return newLL.head;
// }

// VER.4 Recursive
// ask yourself what values need to come with you through recusion - previous pointer
var reverseList = function(head) {
  return head ? reverse(head, null) : head;
  // if head doesnt exist return head otherwise kick off recursion
  // set previous pointer to null
};

function reverse(node, previous) {
  let newHead = node;
  // recursive call to tail
  if (node.next) newHead = reverse(node.next, node);
  // re assigning the previous node to the current node in this call context and the next node to the node's next
  node.next = previous;
  // reverse from tail all the way up to head
  //   newHead

  return newHead;
}

// OTHERS
// ITERATIVE
// function reverseList(head) {
//   var prev = null;
//   while (head) {
//       var next = head.next;
//       head.next = prev;
//       prev = head;
//       head = next;
//   }
//   return prev;
// }

// RECURSIVE
// function reverseList(head) {
//   if (!head || !head.next) {
//       return head;
//   }
//   var newHead = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return newHead;
// }

export default reverseList;
