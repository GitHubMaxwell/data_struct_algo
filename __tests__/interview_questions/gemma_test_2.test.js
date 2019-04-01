import gemma from '../../src/interview_questions/gemma_test_2';

describe('Gemma Test 2', () => {
  it('test1', () => {
    let str = '00-44  48 5555 8361';
    // '004-448-555-583-61'
    expect(gemma(str)).toBe('004-448-555-583-61');
  });
  it('test2', () => {
    let str = '0 - 22 1985--324';
    // 022-198-532-4
    // 022-198-53-24
    // 022-53-24
    expect(gemma(str)).toBe('022-198-53-24');
  });
  it('test3', () => {
    let str = '555372654';
    // 555-372-654
    // 555-37-26-54
    expect(gemma(str)).toBe('555-372-654');
  });
});
