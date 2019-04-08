import { selectionSort, selectionSortBook } from '../../src/common_sense_dsa_book/selection_sort';
describe('Implement Selection Sort', () => {
  it('test', () => {
    let arr = [3, 2, 1];
    let result = [1, 2, 3];
    expect(selectionSort(arr)).toEqual(result);
  });
  it('test', () => {
    let arr = [5, 4, 3, 2, 1];
    let result = [1, 2, 3, 4, 5];
    expect(selectionSort(arr)).toEqual(result);
  });
});

describe('Implement Selection Sort from book example', () => {
  it('test', () => {
    let arr = [3, 2, 1];
    let result = [1, 2, 3];
    expect(selectionSortBook(arr)).toEqual(result);
  });

  xit('test', () => {
    let arr = [5, 4, 3, 2, 1];
    let result = [1, 2, 3, 4, 5];
    expect(selectionSortBook(arr)).toEqual(result);
  });

  xit('test', () => {
    let arr = [1, 2, 3, 4, 5];
    let result = [1, 2, 3, 4, 5];
    expect(selectionSortBook(arr)).toEqual(result);
  });
});
