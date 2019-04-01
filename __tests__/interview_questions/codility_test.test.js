import question2 from '../../src/interview_questions/codility_test';

describe('Question 2 for Gemma Labs', () => {
  xit('test', () => {
    let array = [-1, -2];
    expect(question2(array)).toBe(1);
  });
  xit('test2', () => {
    let array2 = [1, 3, 6, 4, 1, 2];
    expect(question2(array2)).toBe(5);
  });
  xit('test2', () => {
    let array3 = [1, 2, 3];
    expect(question2(array3)).toBe(4);
  });
  xit('test4', () => {
    let array4 = [1];
    expect(question2(array4)).toBe(2);
  });
  xit('test5', () => {
    let array4 = [1, 3, 4, 5, 6, 7];
    expect(question2(array4)).toBe(2);
  });
  it('test6', () => {
    let array4 = [1, 2, 3, 4, 6, 7];
    expect(question2(array4)).toBe(5);
  });
});
