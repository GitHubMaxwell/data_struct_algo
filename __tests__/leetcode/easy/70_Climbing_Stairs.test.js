import climbStairs from '../../../src/leetcode/easy/70_Climbing_Stairs';

describe('70 Climbing Stairs', () => {
  xit('test', () => {
    let num = 2;
    expect(climbStairs(num)).toEqual(2);
  });
  it('test', () => {
    let num = 5;
    expect(climbStairs(num)).toEqual(8);
  });
  xit('test', () => {
    let num = 3;
    expect(climbStairs(num)).toEqual(3);
  });
});
