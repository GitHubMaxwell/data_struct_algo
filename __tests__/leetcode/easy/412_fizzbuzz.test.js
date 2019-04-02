import fizzBuzz from '../../../src/leetcode/easy/412_fizzbuzz';
describe('fizzbuzz leetcode', () => {
  it('test', () => {
    let num = 15;
    let result = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz'
    ];
    expect(fizzBuzz(num)).toEqual(result);
  });
  it('test', () => {
    let num = 1;
    let result = ['1'];
    expect(fizzBuzz(num)).toEqual(result);
  });
});
