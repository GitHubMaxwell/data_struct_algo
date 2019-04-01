import LinkList from '../../../src/utils/linkList';
import detectCycle from '../../../src/leetcode/medium/142_linked_list_cycle_2';

xdescribe('Link List Cycle 2', () => {
  it('should make a link list', () => {
    let arr = [0, 1, 2, 3];

    let newLL = new LinkList();
    newLL.append(arr); //?

    console.log(JSON.stringify(newLL));
    expect(true).toBe(true);
  });
  it('test', () => {
    let arr = [0, 1, 2, 3];
    let newLL = new LinkList();
    newLL.append(arr); //?
    console.log(JSON.stringify(newLL));

    expect(true).toBe(true);
  });
});
