import isPalindrome from '../../../src/leetcode/easy/243_Palindrome_Linked_List';
import fLL from '../../../src/utils/linkListFast';
describe('#243 Palindrome Linked List', () => {
  it('test', () => {
    let nodes = [1, 2, 1];
    let LL = new fLL();
    LL.append(nodes);
    expect(isPalindrome(LL)).toBe(true);
  });
  xit('test', () => {
    let nodes = [1, 2, 3, 3, 2, 1];
    let LL = new fLL();
    LL.append(nodes);
    expect(isPalindrome(LL)).toBe(true);
  });
  it('test', () => {
    let nodes = [1, 2, 3, 3];
    let LL = new fLL();
    LL.append(nodes);
    expect(isPalindrome(LL)).toBe(false);
  });
  it('test', () => {
    let nodes = [1, 2];
    let LL = new fLL();
    LL.append(nodes);
    isPalindrome(LL); //?
    expect(isPalindrome(LL)).toBe(false);
  });
  xit('test', () => {
    let nodes = [1];
    let LL = new fLL();
    LL.append(nodes);
    isPalindrome(LL); //?
    expect(isPalindrome(LL)).toBe(true);
  });
});
