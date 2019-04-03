import sortedArrayToBst from '../../../src/leetcode/easy/108_Convert_Sorted_Array_to_BST';
import BST from '../../../src/utils/binarySearchTree';

describe('Convert a sorted array to a balanced BST', () => {
  it('test', () => {
    let arr = [-10, -3, 0, 5, 9];
    let newBST = new BST();
    newBST.add(0);
    newBST.add(9);
    newBST.add(5);
    newBST.add(-3);
    newBST.add(-10);
    // needs to return an array [0,-3,9,-10,null,5];
    // DFS traverse the tree inorder?

    expect(sortedArrayToBst(arr)).toEqual(newBST);
  });
  it('test', () => {
    let arr = [-10, -3, 0, 5, 9];
    let newBST = new BST();
    newBST.add(0);
    newBST.add(9);
    newBST.add(5);
    newBST.add(-3);
    newBST.add(-10);

    expect(sortedArrayToBst(arr)).toEqual(newBST);
  });
});
