import fLL from '../../src/utils/linkListFast';

describe('Link List that uses arrays to populate nodes instead one at a time', () => {
  it('makes a linked list', () => {
    let nodes = [1, 2, 3];
    let nodes2 = [888, 999];
    let newLL = new fLL();
    newLL.append(nodes);

    expect(newLL.head.val).toBe(1);
    expect(newLL.head.next.val).toBe(2);
    expect(newLL.head.next.next.val).toBe(3);
    expect(newLL.head.next.next.next).toBe(null);
    expect(newLL.length).toBe(3);

    newLL.append(nodes2);
    expect(newLL.head.next.next.next.val).toBe(888);
    expect(newLL.head.next.next.next.next.val).toBe(999);
    expect(newLL.length).toBe(5);
  });
});
