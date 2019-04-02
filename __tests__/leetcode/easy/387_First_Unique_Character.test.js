import firstUnique from '../../../src/leetcode/easy/387_First_Unique_Character';

describe('Find the first unique character in a given string', () => {
  it('test', () => {
    let str = 'leetcode';
    expect(firstUnique(str)).toBe(0);
  });
  it('test', () => {
    let str = 'loveleetcode';
    expect(firstUnique(str)).toBe(2);
  });
  it('test', () => {
    let str = 'aabbccdd';
    expect(firstUnique(str)).toBe(-1);
  });
});
