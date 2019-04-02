import majority from '../../../src/leetcode/easy/169_Majority_Element';

describe('Find the Majority element in a provided array', () => {
  it('test', () => {
    expect(majority([3, 2, 3])).toBe(3);
  });
  it('test', () => {
    expect(majority([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });
  it('test', () => {
    expect(majority([2, 1, 1, 1, 1, 2])).toBe(1);
  });
  it('test', () => {
    // this one is wrong because there isnt a majority and the question says there will always be one
    expect(majority([2, 1, 1, 2, 1, 2])).toBe(2);
  });
  it('test', () => {
    expect(majority([1])).toBe(1);
  });
});
