import { binarySearchRec, binarySearchIt } from '../../src/common_sense_dsa_book/binary_search';
describe('Binary Search - Recursive', () => {
  it('target is minimum value', () => {
    let arr = [1, 6, 2, 5, 3, 4];
    let target = 1;
    expect(binarySearchRec(arr, target)).toBe(true);
  });
  it('target is maximum value', () => {
    let arr = [1, 6, 2, 5, 3, 4];
    let target = 6;
    expect(binarySearchRec(arr, target)).toBe(true);
  });
  it('target isnt in array', () => {
    let arr = [1, 6, 2, 5, 3, 4];
    let target = 7;
    expect(binarySearchRec(arr, target)).toBe(false);
  });
  it('no array given', () => {
    let arr = [];
    let target = 7;
    expect(binarySearchRec(arr, target)).toBe(false);
  });
  it('no array given', () => {
    let arr = [1, 6, 2, 5, 3, 4];
    let target = 'cat';
    expect(binarySearchRec(arr, target)).toBe(false);
  });
});

describe('Binary Search - Iterative', () => {
  it('target is minimum value', () => {
    let arr = [1, 6, 2, 5, 3, 4];
    let target = 1;
    expect(binarySearchIt(arr, target)).toBe(true);
  });
  it('target is maximum value', () => {
    let arr = [1, 6, 2, 5, 3, 4];
    let target = 6;
    expect(binarySearchIt(arr, target)).toBe(true);
  });
  it('target isnt in array', () => {
    let arr = [1, 6, 2, 5, 3, 4];
    let target = 7;
    expect(binarySearchIt(arr, target)).toBe(false);
  });
  it('no array given', () => {
    let arr = [];
    let target = 7;
    expect(binarySearchIt(arr, target)).toBe(false);
  });
  it('no array given', () => {
    let arr = [1, 6, 2, 5, 3, 4];
    let target = 'cat';
    expect(binarySearchIt(arr, target)).toBe(false);
  });
});
