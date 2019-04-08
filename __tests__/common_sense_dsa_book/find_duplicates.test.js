import {
  findDuplicates,
  findDuplicatesHash,
  findDuplicatesArray
} from '../../src/common_sense_dsa_book/find_duplicates';

describe('Find Duplicates in an Array', () => {
  it('Duplicates evident', () => {
    let arr = [1, 2, 3, 4, 5, 1];
    expect(findDuplicates(arr)).toBe(true);
  });
  it('No Duplicates ', () => {
    let arr = [1, 2, 3, 4, 5];
    expect(findDuplicates(arr)).toBe(false);
  });
});

describe('Find Duplicates in an Array in Linear Time using a Hashmap', () => {
  it('Duplicates evident', () => {
    let arr = [1, 2, 3, 4, 5, 1];
    expect(findDuplicatesHash(arr)).toBe(true);
  });
  it('No Duplicates ', () => {
    let arr = [1, 2, 3, 4, 5];
    expect(findDuplicatesHash(arr)).toBe(false);
  });
});

describe('Find Duplicates in an Array in Linear Time using an Array', () => {
  it('Duplicates evident', () => {
    let arr = [1, 2, 3, 4, 5, 1];
    expect(findDuplicatesArray(arr)).toBe(true);
  });
  it('No Duplicates ', () => {
    let arr = [1, 2, 3, 4, 5];
    expect(findDuplicatesArray(arr)).toBe(false);
  });
});
