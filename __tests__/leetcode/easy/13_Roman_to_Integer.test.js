import romanToInt from '../../../src/leetcode/easy/13_Roman_to_Integer';
describe('Convert a string comprised of Roman numerals to an integer', () => {
  it('test', () => {
    let roman = 'IX';
    let result = 9;
    expect(romanToInt(roman)).toBe(result);
  });
  it('test', () => {
    let roman = 'IV';
    let result = 4;
    expect(romanToInt(roman)).toBe(result);
  });
  it('test', () => {
    let roman = 'III';
    let result = 3;
    expect(romanToInt(roman)).toBe(result);
  });
  it('test', () => {
    let roman = 'XXVII';
    let result = 27;
    expect(romanToInt(roman)).toBe(result);
  });
  it('test', () => {
    let roman = 'LVIII';
    let result = 58;
    expect(romanToInt(roman)).toBe(result);
  });
  it('test', () => {
    let roman = 'MCMXCIV';
    let result = 1994;
    expect(romanToInt(roman)).toBe(result);
  });
});
