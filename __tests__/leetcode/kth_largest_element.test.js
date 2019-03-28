import kthLargest from '../../src/leetcode/kth_largest_element';
describe('KTH Largest element in an array', () => {
  it('return 5', () => {
    let array = [6, 5, 4, 3, 2, 1];
    let target = 2;
    kthLargest(array, target); //?
    expect(kthLargest(array, target)).toBe(5);
  });

  it('returns 4', () => {
    let array = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    let target = 4;
    expect(kthLargest(array, target)).toBe(4);
  });

  it('returns 4', () => {
    let array = [6];
    let target = 1;
    expect(kthLargest(array, target)).toBe(6);
  });

  it('returns FIRST ITEM', () => {
    let array = [6, 3, 4, 7, 2];
    let target = array.length;
    expect(kthLargest(array, target)).toBe(2);
  });

  it('returns LAST ITEM', () => {
    // meaning target = 1 should be the last item
    let array = [6];
    let target = 1;
    expect(kthLargest(array, target)).toBe(6);
  });

  it('returns LAST ITEM', () => {
    // meaning target = 1 should be the last item
    let array = [3, 2, 1, 5, 6, 4];
    let target = 2;
    kthLargest(array, target); //?
    expect(kthLargest(array, target)).toBe(5);
  });
});
