import {
  newArr,
  newArrAll,
  newArrWhile,
  newArrWhileFast,
  newArrForEach
} from '../../src/common_sense_dsa_book/new_array';

describe('Create a New Array from even indexes of given array', () => {
  it('Optimized to iterate even indexes - For Loop', () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [0, 2, 4, 6, 8];
    expect(newArr(arr)).toEqual(result);
  });
  it('Not Optimized to iterate even indexes - For Loop', () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [0, 2, 4, 6, 8];
    expect(newArrAll(arr)).toEqual(result);
  });
  it(' Not Optimized While Loop', () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [0, 2, 4, 6, 8];
    expect(newArrWhile(arr)).toEqual(result);
  });
  it('Optimized While Loop', () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [0, 2, 4, 6, 8];
    expect(newArrWhileFast(arr)).toEqual(result);
  });
  it('Not Optimized - For Each Loop', () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [0, 2, 4, 6, 8];
    expect(newArrForEach(arr)).toEqual(result);
  });
});
