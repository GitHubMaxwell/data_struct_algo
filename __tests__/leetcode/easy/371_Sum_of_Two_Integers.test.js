import twoSum from '../../../src/leetcode/easy/371_Sum_of_Two_Integers';

describe('Calculate sum of two integers without using the + or - operators', () => {
  it('returns 5', () => {
    let a = 2;
    let b = 3;
    expect(twoSum(a, b)).toBe(5);
  });
});
