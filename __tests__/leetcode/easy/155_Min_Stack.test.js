import MinStack from '../../../src/leetcode/easy/155_Min_Stack';
describe('Implement a Stack', () => {
  it('Stack Push', () => {
    let obj = new MinStack();
    obj.push(1);
    obj.push(2);
    obj.push(3);
    obj.push(4);
    expect(obj.top()).toBe(4);
  });

  it('Stack Pop', () => {
    let obj = new MinStack();
    obj.push(5);
    obj.pop();
    expect(obj.head).toBe(null);
  });

  it('Stack Top', () => {
    let obj = new MinStack();
    obj.push(5);
    expect(obj.top()).toBe(5);
  });

  it('Stack getMin', () => {
    let obj = new MinStack();
    obj.push(5);
    obj.push(2);
    let min = obj.getMin();
    expect(min).toBe(2);
  });

  it('Stack getMin', () => {
    let obj = new MinStack();
    obj.push(-2);
    obj.push(0);
    obj.push(-3);
    obj.pop();
    let min = obj.getMin();
    expect(min).toBe(-2);
  });
});
