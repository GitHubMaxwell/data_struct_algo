import addTwoNums from '../../src/leetcode/add_two_numbers';
import LinkList from '../../src/utils/linkList';
describe('Add two numbers', () => {
  // beforeEach(() => {
  //   var LL = new linkList();
  //   LL.append(1);
  //   LL.append(2);
  //   console.log('Before');
  //   return LL; //?
  // });

  it('return 7 -> 0 -> 8 -> null', () => {
    let LL1 = new LinkList();
    LL1.append(2);
    LL1.append(4);
    LL1.append(3);

    let LL2 = new LinkList();
    LL2.append(5);
    LL2.append(6);
    LL2.append(4);

    let answer = new LinkList();
    answer.append(7);
    answer.append(0);
    answer.append(8);

    let testing = addTwoNums(LL1, LL2); //?

    expect(testing).toEqual(answer);
  });
});
