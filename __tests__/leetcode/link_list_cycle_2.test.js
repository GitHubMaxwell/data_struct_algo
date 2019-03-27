import LinkList from '../../src/utils/linkList';

describe('Link List Cycle 2', () => {
  it('should make a link list', () => {
    let arr = [0, 1, 2, 3];

    let newLL = new LinkList();
    newLL.append(arr); //?

    console.log(JSON.stringify(newLL));
  });
});
