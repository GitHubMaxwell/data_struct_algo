import reversed from '../../../src/leetcode/easy/206_Reversed_Linked_List';
import fLL from '../../../src/utils/linkListFast';

describe('Reverse a given linked list', () => {
  it('test', () => {
    let LL = new fLL();
    LL.append([1, 2, 3]);
    console.log(JSON.stringify(LL)); //?

    let result = new fLL();
    result.append([3, 2, 1]);
    console.log(JSON.stringify(result)); //?

    expect(reversed(LL.head)).toEqual(result.head);
  });
});
