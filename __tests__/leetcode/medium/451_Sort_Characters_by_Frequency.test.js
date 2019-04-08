import freqSort from '../../../src/leetcode/medium/451_Sort_Characters_by_Frequency';

describe('Sort a string in decreasin order based on the frequency of characters', () => {
  it('test', () => {
    let str = 'tree';
    // eert
    expect(freqSort(str)).toBe('eert');
  });
});
