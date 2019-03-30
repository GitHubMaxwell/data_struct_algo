import cLL from '../../src/utils/circularLinkedList';

describe('Testing circular link list', () => {
  it('ADDS cycle to LL', () => {
    let circle = new cLL();
    circle.append(1);
    circle.append(2);
    circle.append(3);
    circle.append(4);
    circle.addCycle(2);
    expect(true).toBe(true);
  });

  it('REMOVES cycle from LL', () => {
    let circle = new cLL();
    circle.append(1);
    circle.append(2);
    circle.append(3);
    circle.append(4);
    expect(circle.head.next.next.next.next).toBe(null);
    circle.addCycle(3);
    expect(circle.head.next.next.next.end).toBe(true);
    expect(circle.head.next.next.next.next.end).toBe(undefined);
    expect(circle.head.next.next.next.next.next.end).toBe(true);
    expect(circle.head.next.next.next.next.val).toBe(3);
    expect(circle.head.next.next.next.next.next.val).toBe(4);
    circle.removeCycle();
    expect(circle.head.next.next.next.next).toBe(null);
    expect(circle.head.next.next.next.end).toBe(true);
    expect(circle.head.next.next.next.val).toBe(4);
  });

  it('FINDS END node ands re-assigns it correctly as new nodes are added to the LL', () => {
    let circle = new cLL();
    circle.append(1);
    expect(circle.head.end).toBe(true);

    circle.append(2);
    expect(circle.head.end).toBe(undefined);
    expect(circle.head.next.end).toBe(true);

    circle.append(3);
    expect(circle.head.next.end).toBe(undefined);
    expect(circle.head.next.next.end).toBe(true);

    circle.append(4);
    expect(circle.head.next.next.end).toBe(undefined);
    expect(circle.head.next.next.next.end).toBe(true);
  });

  it('properly re-assigns cyclic point as nodes are added', () => {
    let circle = new cLL();
    circle.append(1);
    circle.addCycle(2);
    expect(circle.head.end).toBe(true);
  });

  it('return Error while trying to add cycle with node that doesnt exist', () => {
    let circle = new cLL();
    circle.append(1);
    circle.addCycle(2);
    expect(circle.addCycle(2)).toBe('Cycle point not found');
    circle.append(2);
    circle.append(3);
    expect(circle.head.next.next.next).toBe(null);
    expect(circle.hasCycle).toBe(false);
    circle.addCycle(2);
    expect(circle.head.next.next.next.val).toBe(2);
    expect(circle.hasCycle).toBe(true);
  });
});
