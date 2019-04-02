import containsDups from '../../../src/leetcode/easy/217_Contains_Duplicates';

describe('Iterate through an array and ', () => {
  it('test', () => {
    let nums = [1, 2, 3, 1];
    expect(containsDups(nums)).toBe(true);
  });
  it('test', () => {
    let nums = [1, 2, 3, 4];
    expect(containsDups(nums)).toBe(false);
  });
  it('test', () => {
    let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDups(nums)).toBe(true);
  });
  it('test', () => {
    let nums = [1];
    expect(containsDups(nums)).toBe(false);
  });
  it('test', () => {
    let nums = [];
    expect(containsDups(nums)).toBe(false);
  });
});
