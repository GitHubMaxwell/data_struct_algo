import missingNumber from '../../../src/leetcode/easy/268_Missing_Number';
describe('Find the first missing number in an array of integers', () => {
  it('test', () => {
    let nums = [0, 1, 3];
    expect(missingNumber(nums)).toBe(2);
  });
  it('test', () => {
    let nums = [0];
    expect(missingNumber(nums)).toBe(1);
  });
});
