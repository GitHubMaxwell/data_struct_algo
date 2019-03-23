// leetcode #144
import binaryTree from '../utils/binarySearchTree';
// var preorderTraversal = function(root) {
//   let array = [];
//   function traverse(node) {
//     if (!node) return;
//     array.push(node.value);
//     traverse(node.left);
//     traverse(node.right);
//   }
//   traverse(root);
//   return array;
// };

// ITERATIVELY
var preorderTraversal = function(root) {
  let array = [];
  let stack = [];
  // because we arent using recursion we need to emulate it
  // this means using a stack DS to mimic JS's Callstack
  // STEPS
  // push the value onto the array
  // push the node onto stack
  // go to left
  // if left node

  while (true) {
    if (root !== null) {
      array.push(root.value);
      stack.push(root);
      root = root.left;
      // go to left
    } else {
      if (stack.length === 0) break;
      // this stops the while loop
      root = stack.pop();
      // this acts as the recursive end case
      // re assigns the root to the PREVIOUS node
      // - and because you went to the left already, as you can see below the root is then re assigned to the
      // array.push(root.value);
      root = root.right;
      // go to right
    }
  }
  return array;
};

let tree = new binaryTree();
tree.add(1);
tree.add(3);
tree.add(2);
// tree; //?
// [1,3,2];
preorderTraversal(tree.head); //?

export default preorderTraversal;
