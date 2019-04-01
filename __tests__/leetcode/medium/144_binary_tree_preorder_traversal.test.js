import binaryTree from '../../../src/utils/binarySearchTree';
import preorderTraversal from '../../../src/leetcode/medium/144_binary_tree_preorder_traversal';

describe('Binary Tree PRE-order Traversal', () => {
  it('returns [1,3,2]', () => {
    let tree = new binaryTree();
    tree.add(1);
    tree.add(3);
    tree.add(2);
    // preorderTraversal(tree.head); //?

    expect(preorderTraversal(tree.head)).toEqual([1, 3, 2]);
  });
  it('returns [1]', () => {
    let tree = new binaryTree();
    tree.add(1);
    // preorderTraversal(tree.head); //?

    expect(preorderTraversal(tree.head)).toEqual([1]);
  });
  it('returns [1,3,2]', () => {
    let tree = new binaryTree();
    tree.add(1);
    tree.add(3);
    tree.add(2);
    // preorderTraversal(tree.head); //?

    expect(preorderTraversal(tree.head)).toEqual([1, 3, 2]);
  });
});
