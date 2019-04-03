import isValid from '../../../src/leetcode/easy/20_Valid_Paranthesis';

describe('#20 Valid Paranthesis', () => {
  it('test', () => {
    expect(isValid('')).toBe(true);
  });
  it('test', () => {
    expect(isValid('()')).toBe(true);
  });
  it('test', () => {
    expect(isValid('()')).toBe(true);
  });
  it('test', () => {
    expect(isValid('()[]{}')).toBe(true);
  });
  it('test', () => {
    expect(isValid('(]')).toBe(false);
  });
  it('test', () => {
    // because of this they have to be in order as in an opening paren cant be met with a closing of another but a successive opening can be closed
    expect(isValid('([)]')).toBe(false);
  });
  it('test', () => {
    expect(isValid('(]')).toBe(false);
  });
});
