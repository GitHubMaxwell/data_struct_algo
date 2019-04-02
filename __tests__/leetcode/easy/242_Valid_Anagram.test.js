import isAnagram from '../../../src/leetcode/easy/242_Valid_Anagram';

describe('Determine if the two given strings a anagrams of eachother', () => {
  it('test', () => {
    let s = 'anagram';
    let t = 'nagaram';
    expect(isAnagram(s, t)).toBe(true);
  });
  it('test', () => {
    let s = 'angram';
    let t = 'nagaram';
    expect(isAnagram(s, t)).toBe(false);
  });
  it('test', () => {
    let s = 'cccc';
    let t = 'ssss';
    expect(isAnagram(s, t)).toBe(false);
  });
});
