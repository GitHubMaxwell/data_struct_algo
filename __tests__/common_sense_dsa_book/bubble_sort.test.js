import { bubbleSort, bubbleSortDo } from '../../src/common_sense_dsa_book/bubble_sort';

describe('Implement Bubble Sort', () => {
  it('test', () => {
    let arr = [3, 2, 1];
    let result = [1, 2, 3];
    expect(bubbleSort(arr)).toEqual(result);
  });
  it('test', () => {
    let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(bubbleSort(arr)).toEqual(result);
  });
  it('test', () => {
    let arr = [1];
    expect(bubbleSort(arr)).toEqual(arr);
  });
});

describe('Implement Bubble Sort - Do...While', () => {
  it('test', () => {
    let arr = [3, 2, 1];
    let result = [1, 2, 3];
    expect(bubbleSortDo(arr)).toEqual(result);
  });
  it('test', () => {
    let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(bubbleSortDo(arr)).toEqual(result);
  });
  it('test', () => {
    let arr = [1];
    expect(bubbleSortDo(arr)).toEqual(arr);
  });
});
