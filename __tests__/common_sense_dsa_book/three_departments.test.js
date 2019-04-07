import { threeDepts } from '../../src/common_sense_dsa_book/three_departments';
import { threeDepts2 } from '../../src/common_sense_dsa_book/three_departments';

describe('Three Departments Problem from V. Anton Spraul YT Series Video 2', () => {
  it('test', () => {
    let one = threeDepts();
    let two = threeDepts2();
    if (one.length === two.length) {
      for (let i = 0; i < one.length; i++) {
        expect(one[i]).toEqual(two[i]);
      }
    } else {
      expect(true).toBe(false);
    }
  });
});
