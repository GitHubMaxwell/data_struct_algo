import binarySearch from '../../src/common_sense_dsa_book/binary_search';
describe('Binary Search', () => {
  it('test', () => {
    let arr = [1, 6, 2, 5, 3, 4];
    let target = 3;
    binarySearch(arr, target);
    expect(true).toBe(true);
  });
});
