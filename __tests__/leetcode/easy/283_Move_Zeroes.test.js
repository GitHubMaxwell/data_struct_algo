import moveZeroes from '../../../src/leetcode/easy/283_Move_Zeroes';
describe('Move Zeroes', () => {
  it('Regular Random Set', () => {
    let nums = [0, 1, 0, 3, 12];
    let result = [1, 3, 12, 0, 0];
    expect(moveZeroes(nums)).toEqual(result);
  });

  it('Lots of Zeroes', () => {
    let nums = [0, 0, 0, 0, 0, 0, 0, 1, 0, 2];
    let result = [1, 2, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(moveZeroes(nums)).toEqual(result);
  });

  it('Single Element in Array', () => {
    let nums = [0];
    let result = [0];
    expect(moveZeroes(nums)).toEqual(result);
  });

  it('Evenly distributed ints and zeroes', () => {
    let nums = [0, 1, 0, 2, 0, 3, 0, 4];
    let result = [1, 2, 3, 4, 0, 0, 0, 0];
    expect(moveZeroes(nums)).toEqual(result);
  });
});
