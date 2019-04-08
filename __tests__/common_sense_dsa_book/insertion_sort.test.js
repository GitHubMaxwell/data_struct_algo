import { insertionSort, insertionSortBook } from '../../src/common_sense_dsa_book/insertion_sort';

describe('Implement Insertion Sort', () => {
  it('test', () => {
    let arr = [3, 2, 1];
    let result = [1, 2, 3];
    expect(insertionSort(arr)).toEqual(result);
  });
  it('test', () => {
    let arr = [3, 2, 5, 4, 1];
    let result = [1, 2, 3, 4, 5];
    expect(insertionSort(arr)).toEqual(result);
  });
  it('Book Test', () => {
    let arr = [3, 2, 1];
    let result = [1, 2, 3];
    expect(insertionSortBook(arr)).toEqual(result);
  });
  it('Book Test 2', () => {
    let arr = [3, 2, 5, 4, 1];
    let result = [1, 2, 3, 4, 5];
    expect(insertionSortBook(arr)).toEqual(result);
  });
});
