import twoSum from '../../src/leetcode/two_sum_1';

xdescribe('Two Sum leetcode question 1', () => {
  it('should return [1,2]', () => {
    let array = [3, 2, 4];
    let target = 6;
    expect(twoSum(array, target)).toEqual([1, 2]);
  });
  it('should return [0,1]', () => {
    let array = [2, 7, 11, 15];
    let target = 9;
    expect(twoSum(array, target)).toEqual([0, 1]);
  });
  it('should return [0,2]', () => {
    let array = [2, 11, 7, 15];
    let target = 9;
    expect(twoSum(array, target)).toEqual([0, 2]);
  });
  it('should return [0,2]', () => {
    let array = [7, 11, 2, 15];
    let target = 9;
    expect(twoSum(array, target)).toEqual([0, 2]);
  });
  it('should return [1,3]', () => {
    let array = [15, 2, 11, 7];
    let target = 9;
    expect(twoSum(array, target)).toEqual([1, 3]);
  });
  it('should return [2,3]', () => {
    let array = [15, 11, 2, 7];
    let target = 9;
    expect(twoSum(array, target)).toEqual([2, 3]);
  });
});
