import gemma from '../../src/interview_questions/gemma_test_2';

describe('Gemma Test 2', () => {
  it('test1', () => {
    let str = '00-44  48 5555 8361';
    expect(gemma(str)).toBe('004-448-555-583-61');
  });
  it('test2', () => {
    let str = '0 - 22 1985--324';
    expect(gemma(str)).toBe('022-198-53-24');
  });
  it('test3', () => {
    let str = '555372654';
    expect(gemma(str)).toBe('555-372-654');
  });
});
