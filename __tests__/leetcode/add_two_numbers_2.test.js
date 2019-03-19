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

  xit('return 7 -> 0 -> 8 -> null', () => {
    // 342
    let LL1 = new LinkList();
    LL1.append(2);
    LL1.append(4);
    LL1.append(3);
    console.log(LL1);

    // 465
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
  it('return 7 -> 0 -> 8 -> null', () => {
    let LL1 = new LinkList();
    LL1.append(1);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(0);
    LL1.append(1);
    console.log(LL1); //?

    let LL2 = new LinkList();
    // 564
    LL2.append(4);
    LL2.append(6);
    LL2.append(5);
    console.log(LL2); //?

    let answer = new LinkList();
    answer.append(1);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(0);
    answer.append(4);
    answer.append(6);
    answer.append(6);
    console.log(answer); //?
    // console.log(answer.head.next.next); //?

    let testing = addTwoNums(LL1, LL2); //?
    testing;

    expect(testing).toEqual(answer);
  });
});

// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]
