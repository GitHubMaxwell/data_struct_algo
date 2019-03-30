// leetcode #94 medium

import BST from '../../utils/binarySearchTree';
// have the recursion be
// vistLeft(node);
// push(current.value) // at this point youve investigated the entire left subtree and this is the root
// visitRight(node);
// in order = left root right

var inorderTraversal = function(root) {
  let array = [];
  function traverse(node) {
    if (node) {
      node.value; //?
      if (node.left) {
        traverse(node.left);
        // array.push(node.value);
      }
      array.push(node.value); //?
      if (node.right) {
        traverse(node.right);
        // array.push(node.value);
      }
    }
    return;
  }
  traverse(root.head);
  return array; //?
};

// SOLUTION 2
// var inorderTraversal = function(root, arr = []) {
function inorderTrav(root, arr = []) {
  //   let tree = root.head; // this doesnt work because it expects you to hand it the Tree already at the hea
  // go left
  // look at nodes
  // go right
  if (root) {
    inorderTrav(root.left, arr);
    arr.push(root.value);
    inorderTrav(root.right, arr);
  }
  return arr; //?
}

function preorderTrav(root, arr = []) {
  // look at node
  // go left
  // go right
  // root, left, right
  if (root) {
    arr.push(root.value);
    preorderTrav(root.left, arr);
    preorderTrav(root.right, arr);
  }
  return arr; //?
}

function postorderTrav(root, arr = []) {
  // left, right, root
  // go left
  // go right
  // look at node
  if (root) {
    postorderTrav(root.left, arr);
    postorderTrav(root.right, arr);
    arr.push(root.value);
  }
  return arr; //?
}

// ITERATIVE SOLUTION
var inorderIterative = function(root) {
  var stack = [],
    res = [];
  // stack;
  // res;

  while (true) {
    if (root !== null) {
      stack.push(root);
      // push the whole node on stack, not just the value
      root = root.left;
      // re-assign root to root.left, even if it doesnt exists = null;
    } else {
      if (stack.length === 0) break;
      // this breaks us out of an otherwise infinite loop
      root = stack.pop();
      // re-assign
      res.push(root.value);
      root = root.right;
    }
  }

  return res;
};

let newBST = new BST();
newBST.add(1);
newBST.add(3);
newBST.add(2);
inorderIterative(newBST.head); //?
inorderTraversal(newBST); //?
// [1,2,3]
inorderTrav(newBST.head); //?
// [1,2,3]
// preorderTrav(newBST.head); //?
// // [1,3,2]
// postorderTrav(newBST.head); //?
// [2,3,1]
// console.log(JSON.stringify(newBST)); //?

let fullBST = new BST();
fullBST.add(5);
fullBST.add(3);
fullBST.add(4);
fullBST.add(2);
fullBST.add(7);
fullBST.add(6);
fullBST.add(8);
console.log(JSON.stringify(fullBST)); //?

inorderTrav(fullBST.head); //?
// go left, look at node, go right
// [2, 3, 4, 5, 6, 7, 8];
// 5 = root in center
preorderTrav(fullBST.head); //?
// look at node, go left, go right
// [5, 3, 2, 4, 7, 6, 8];
// 5 = root at beginning
postorderTrav(fullBST.head); //?
// go left, go right, look at node,
// [2, 4, 3, 6, 8, 7, 5];
// 5 = root at end;

export default inorderTraversal;
