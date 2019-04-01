import binaryTree from '../../../src/utils/binarySearchTree';
import maxDepth from '../../../src/leetcode/easy/104_Maximum_Depth_Binary_Tree';

// BFS - recursively
// BFS - iteratively - queue
// DONE - DFS - recursively
// DFS - iteratively - stack

describe('Maximum Depth of Binary Tree', () => {
  it('max depth 3', () => {
    let newTree = new binaryTree();
    newTree.add(4);
    // root level = level 1;
    newTree.add(3);
    newTree.add(6);
    // level 2;
    newTree.add(5);
    // level 3;

    // console.log(JSON.stringify(newTree));

    expect(maxDepth(newTree.head)).toEqual(3);
    expect(true).toEqual(true);
  });

  it('no tree', () => {
    let newTree = new binaryTree();
    expect(maxDepth(newTree.head)).toEqual(0);
  });

  it('single level tree - only root', () => {
    let newTree = new binaryTree();
    newTree.add(4);
    // root level = level 1;
    expect(maxDepth(newTree.head)).toEqual(1);
  });
});
