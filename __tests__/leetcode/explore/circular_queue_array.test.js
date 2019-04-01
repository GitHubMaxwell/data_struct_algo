import CircularQueue from '../../../src/leetcode/explore/stacks_queues/circular_queue_array';

describe('Circular Queue using an Array', () => {
  it('derp', () => {
    //
    let newCQ = new CircularQueue(3);
    newCQ.enqueue(1); //?
    newCQ.enqueue(2); //?
    newCQ.enqueue(3); //?
    newCQ.enqueue(4); //?
    newCQ.Rear(); //?
    newCQ.isFull(); //?
    newCQ.dequeue(); //?
    newCQ.enqueue(4); //?
    newCQ.Rear(); //?
    // expect(true).toBe(true);
  });

  it('test2', () => {
    let newCQ2 = new CircularQueue(1);
    newCQ2.enqueue(6); //?
    newCQ2.Rear(); //?
    newCQ2.Rear(); //?
    newCQ2.dequeue(); //?
    newCQ2.enqueue(5); //?
    newCQ2.Rear(); //?
    newCQ2.dequeue(); //?
    newCQ2.Front(); //?
    newCQ2.dequeue(); //?
    newCQ2.dequeue(); //?
    newCQ2.dequeue(); //?
    // expect(true).toBe(true);
  });

  it('test3', () => {
    let newCQ3 = new CircularQueue(1);
    newCQ3.enqueue(3); //?
    newCQ3.dequeue(); //?
    newCQ3.Front(); //?
    newCQ3.dequeue(); //?
    newCQ3.Front(); //?
    newCQ3.Rear(); //?
    newCQ3.enqueue(0); //?
    newCQ3.isFull(); //?
    newCQ3.dequeue(); //?
    newCQ3.Rear(); //?
    newCQ3.enqueue(3); //?
    // expect(true).toBe(true);
  });
});
