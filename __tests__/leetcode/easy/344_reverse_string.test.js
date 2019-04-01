import revStr from '../../../src/leetcode/easy/344_reverse_string';

describe('Reverse String in place', () => {
  it('test', () => {
    let arr = ['h', 'e', 'l', 'l', 'o'];
    // returns ['o', 'l', 'l', 'e', 'h'];
    expect(revStr(arr)).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  it('no string', () => {
    let arr = [];
    expect(revStr(arr)).toBe(0);
  });

  it('single letter string', () => {
    let arr = ['h'];
    expect(revStr(arr)).toEqual(['h']);
  });
});
