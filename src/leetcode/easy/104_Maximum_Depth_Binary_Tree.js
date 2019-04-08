// leetcode #104 easy
// given a binary tree find its maximum depth

/*

Data Structure Signature

TreeNode {
    val: 3,
    right:
    
    TreeNode {
        val: 20,
        right: TreeNode { val: 7, right: null, left: null },
        left: TreeNode { val: 15, right: null, left: null } },
        
    left: TreeNode { val: 9, right: null, left: null } }
*/

// NOTES
// BFS + memoization -> not visit all nodes
// BFS with stacks and queues
// BFS with recursion and queues
// BFS iterative
// DFS - visit all nodes (takes longer)
// do it DFS and BFS and stacks and queues
// - root counts as first level

//-----------------//
// MY SOLUTION : BFS recurisve
//-----------------//

import BST from '../../utils/binarySearchTree';
// function maxDepth(root) {
//   if (!root) return 0;
//   let counter = 1;
//   function BFS(node) {
//     let queue = [];
//     // push our first node into the queue
//     queue.push(node);
//     // END CASE (dependent on queue)
//     while (queue.length > 0) {
//       // create reference to the currentNode, at the top of the queue
//       // as its always at position zero this is always the parent node you are gathering
//       let currentNode = queue[0];

//       // if currentNode has left child node, enqueue it
//       if (currentNode.left !== null) {
//         queue.push(currentNode.left);
//       }
//       // if currentNode has right child node, enqueue it
//       if (currentNode.right !== null) {
//         queue.push(currentNode.right);
//       }
//       // after adding children dequeue the parent node
//       queue.shift();
//     }
//   }
//   // counter;
//   BFS(root);
//   return counter;
// }

//-----------------//
// FANCY SHORT SOLUTION - DFS? - RECURSIVE
//-----------------//
// i think this is DFS because

// var maxDepth = function(root) {
//   //   root; //?
//   //   root.left; //?
//   //   root.right; //?
//   if (root === null) return 0; //?
//   //   maxDepth(root.left) + 1;//?
//   //   maxDepth(root.right) + 1;//?
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1; //?
//   //   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

//-----------------//
// BFS - ITERATIVE
//-----------------//

// var maxDepth = function(root) {
//   if (!root) {
//     return 0;
//   }

//   let queue = [];
//   // Each element in queue stores: current node and current depth.
//   queue.push([root, 1]);
//   // Use global_maximum to keep track of the maximum depth seen so far
//   let global_maximum = 0;

//   // Loop over until we have traversed all nodes.
//   while (queue.length !== 0) {
//     let curr_node;
//     curr_node = queue.shift();
//     // curr_node;//?
//     let node = curr_node['0'];
//     // setting node to the first value in the array that dequeued
//     // curr_node[0] === curr_node['0']; these are equal but i dont know why they use strings
//     let curr_max = curr_node['1'];
//     // assigns the current max to the second value in the dequeued value

//     global_maximum = Math.max(curr_max, global_maximum);
//     // compare and reassign global max
//     // global_maximum; //?

//     // Add children to the queue if there are any.
//     if (node.left) {
//       queue.push([node.left, curr_max + 1]);
//     }
//     if (node.right) {
//       queue.push([node.right, curr_max + 1]);
//     }
//   }

//   return global_maximum; //?
// };

//-----------------//
// DFS - recursive
//-----------------//

// var maxDepth = function(root) {
//   if (root === null) return 0;
//   var result = 0;
//   function dfs(node, depth) {
//     if (node.left !== null) {
//       dfs(node.left, depth + 1);
//     }
//     if (node.right !== null) {
//       dfs(node.right, depth + 1);
//     } else result = Math.max(result, depth);
//     // in other words go down each sub tree and at the end compare with Math.max which is larger and reassign that to the "results" variable
//   }
//   // start at level one
//   // is this considered memoization
//   dfs(root, 1);
//   return result;
// };

//-----------------//
// DFS - recursive
//-----------------//
// how do you not get duplicates with this

var maxDepth = function(root) {
  return findDepth(root); //?
};

function findDepth(root, depth = 0) {
  if (!root) {
    return depth; //?
    // this is the trick to the END CASE
    // it
  }

  let leftDepth = findDepth(root.left, depth + 1);
  // find depth of left sub tree
  // when you back track up to a parent node you lose the depth + 1 state (it goes back to the previous one)??? - but the end case

  let rightDepth = findDepth(root.right, depth + 1);
  // find depth of right subtree

  let max = leftDepth > rightDepth ? leftDepth : rightDepth;
  // this is continously evaluated

  return max; //?
}

// let tree = new BST();

// tree.add(3);
// tree.add(2);
// tree.add(5);
// tree.add(4);
// tree.add(6);
// depth = 3
// tree;

// maxDepth(tree.head); //?

// console.log(JSON.stringify(tree));

// function maxDepth(tree) {
//   let max = 0;

//   function traverse(tree, depth = 1) {
//     if (!tree) {
//       return;
//     }

//     max = Math.max(max, depth);

//     traverse(tree.left, depth + 1);
//     traverse(tree.right, depth + 1);
//   }
//   traverse(tree);
//   return max; //?
// }

export default maxDepth;
