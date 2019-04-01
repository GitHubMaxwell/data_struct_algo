import cLL from '../../utils/circularLinkedList';

// given a LL, return true if theres a cycle or false if theres not
// NOTES
// two pointers method
// one pointer adding .visited = true to all nodes
// once it hits null return false
// hits node with .visited return true

// ASSUMPTIONS
// some answers are set up assuming that there are unique val in each node and once both runners get to a node with the same val = cyclic

// function hasCycle(head) {
//   if (!head) return false;

//   let one = head;
//   let two = head;

//   while (two.next && one.next) {
//     if (one.val === two.val) {
//       return true;
//     }
//     one = one.next;
//     two = two.next.next;
//   }
//   return false;
// }

// SOMEONE ELSE
// var hasCycle = function(head) {
//   if (!head) return false;
//   let walker = head;
//   let runner = head;

// //   while (walker.next && runner.next && runner.next.next) {
//   while (runner.next && runner.next.next && walker.next) {
//     // while (walker.next && runner.next) {
//     if (walker.next == runner.next.next) {
//       return true;
//     }
//     walker = walker.next;
//     runner = runner.next.next;
//   }
//   return false;
// };

// OTHER
// var hasCycle = function(head) {
//   const nodes = new Set();
//   while (head) {
//     if (nodes.has(head)) return true;
//     nodes.add(head);
//     head = head.next;
//   }
//   return false;
// };

// OTHER 2
var hasCycle = function(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }
  return false;
};

// let circle = new cLL();
// circle.append(3);
// circle.append(2);
// circle.append(0);
// circle.append(-4);
// circle.addCycle(2);
// circle.head.val; //?
// circle.head.next.val; //?
// circle.head.next.next.val; //?
// circle.head.next.next.next.val; //?
// circle.head.next.next.next.next.val; //?
// circle.head.next.next.next.next.next.val; //?
// circle.head.next.next.next.next.next.next.val; //?
// circle.head.next.next.next.next.next.next.next.val; //?
// console.log(JSON.stringify(circle)); //?

let circle = new cLL();
circle.append(2);
circle.append(2);
circle.append(2);
circle.append(2);
circle.addCycle(2);

// if fast == slow as in are they the SAME address in memory not just the same value

hasCycle(circle.head); //?
