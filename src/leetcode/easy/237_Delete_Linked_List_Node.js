// given a linked list
// find a node and delete it
// search per node.val === target

function deleteNode(head, target) {
  let current = head.head;

  while (current.next) {
    if (current.next.val === target) {
      current.next = current.next.next;
      head.length = head.length - 1;
      break;
    }
    current = current.next;
  }
  return head.head;
}

// // VER.2
// // dont know how this works since you dont iterate nor have access to the target
// var deleteNode = function(node) {
//     node.val = node.next.val;
//     node.next = node.next.next;
// };

export default deleteNode;
