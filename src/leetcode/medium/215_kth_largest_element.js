// leetcode #215 medium
// Find the kth largest element in an unsorted array given an array and a kth

// STEPS
// sort array
// return kth from end
import sortNum from '../../utils/sortNumbers';

function kthLargest(arr, target) {
  arr.sort(sortNum);
  return arr[arr.length - target];
}

// let array = [6, 5, 4, 3, 2, 1];
// let target = 2;
// let array = [3, 2, 3, 1, 2, 4, 5, 5, 6];
// let target = 1;

// kthLargest(array, target); //?

export default kthLargest;
