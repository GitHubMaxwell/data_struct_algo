// import BST from '../../utils/binarySearchTree';

// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// NOTES
// height balanced?
// -- For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// ASSUMPTIONS
// will i always have a an odd numbered array to make the BST from

//ALGO
// since array is sorted i can choose the middle most element to be the root of the BST
// -- what if its even

// function sortedArrayToBst(arr) {
//   let skip = Math.floor(arr.length / 2);
//   let newBST = new BST();
//   newBST.add(arr[skip]);

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (i === skip) {
//       continue;
//     }
//     newBST.add(arr[i]);
//   }
//   console.log(JSON.stringify(newBST)); //?
//   return newBST;
// }

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class binarySearchTree {
//   constructor() {
//     this.head = null;
//   }
//   add(val) {
//     // recursively iterating and deciding whether to put value to left or right
//     const node = this.head;
//     if (node === null) {
//       this.head = new TreeNode(val);
//     } else {
//       const searchTree = function(node) {
//         if (val <= node.val) {
//           if (!node.left) {
//             node.left = new TreeNode(val);
//             return;
//           } else {
//             return searchTree(node.left);
//           }
//         }
//         if (val > node.val) {
//           if (!node.right) {
//             node.right = new TreeNode(val);
//             return;
//           } else {
//             return searchTree(node.right);
//           }
//         } else {
//           return null;
//         }
//       };
//       return searchTree(node);
//     }
//   }
// }

// VER.2 copy/paste my solution from leetcode to debug
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.head = null;
  }
  add(val) {
    let node = this.head;
    if (!node) {
      this.head = new TreeNode(val);
    } else {
      function traverse(node) {
        if (val <= node.val) {
          if (!node.left) {
            node.left = new TreeNode(val);
            return;
          } else {
            traverse(node.left);
          }
        }
        if (val > node.val) {
          if (!node.right) {
            node.right = new TreeNode(val);
            return;
          } else {
            traverse(node.right);
          }
        } else {
          return null;
        }
      }
      return traverse(node);
    }
  }
}

var sortedArrayToBST = function(nums) {
  let skip = Math.floor(nums.length / 2);
  let tree = new BST();
  tree.add(nums[skip]);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === skip) {
      continue;
    }
    tree.add(nums[i]);
  }
  return tree;
};
let array = [-10, -3, 0, 5, 9];
let tree = sortedArrayToBST(array); //?

let newBinaryTree = new BST();
newBinaryTree.add(0);
newBinaryTree.add(9);
newBinaryTree.add(5);
newBinaryTree.add(-3);
newBinaryTree.add(-10);

tree === newBinaryTree; //?

console.log(JSON.stringify(tree)); //?
console.log(JSON.stringify(newBinaryTree)); //?

// let arr = [-10, -3, 0, 5, 9];
// let arr = [-10, -3, 0, 1, 5, 9];
// // let newBST = new BST();
// sortedArrayToBst(arr);

export default sortedArrayToBst;
