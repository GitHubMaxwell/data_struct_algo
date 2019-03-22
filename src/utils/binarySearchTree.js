/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = this.head;
    if (node === null) {
      this.head = new TreeNode(value);
      return;
    } else {
      const searchTree = function(node) {
        // go to the LEFT
        if (value <= node.value) {
          if (node.left === null) {
            // once you have gotten to the bottom and left most leaf, insert node
            // this also acts as the END CASE for the recursion
            node.left = new TreeNode(value);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
            // recursively continue searching down the left
          }
        }
        if (value > node.value) {
          // go to the RIGHT
          if (node.right === null) {
            node.right = new TreeNode(value);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
      // INITIAL recursive call;
    }
  }
}

export default Tree;
