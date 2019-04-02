import fLL from '../../../src/utils/linkListFast';
import deleteNode from '../../../src/leetcode/easy/237_Delete_Linked_List_Node';
describe('Delete a Node from a linkedlist', () => {
  it('test1', () => {
    let nodes = [1, 2, 3, 4];
    let target = 3;
    let LL = new fLL();
    LL.append(nodes);

    let nodes2 = [1, 2, 4];
    let LL2 = new fLL();
    LL2.append(nodes2);

    expect(deleteNode(LL, target)).toEqual(LL2.head);
  });
});
