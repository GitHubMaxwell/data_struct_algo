import binaryTree from '../../src/utils/binarySearchTree';
import inorderTraversal from '../../src/leetcode/binary_tree_inorder_traversal';
describe('Binary Tree IN-order Traversal', () => {
  it('should make a tree', () => {
    let tree = new binaryTree();
    tree.add(1);
    tree.add(3);
    tree.add(2);
    inorderTraversal(tree);
    // console.log(JSON.stringify(tree));
    expect(inorderTraversal(tree)).toEqual([1, 2, 3]);
  });
});
