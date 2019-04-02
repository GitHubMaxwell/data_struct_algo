// given an unsorted array, find the first missing number starting from 0 up to n

// NOTES
// should be linear time
// can you do it in constant time?

// ASSUMPTIONS
// all integers
// all distinct
// always missing exactly one number?

// ALGO
// sort first?
// then iterate and if arr[i] !=

import sortNums from '../../utils/sortNumbers';

// VER.1 mine 100ms

// function missingNumber(nums) {
//   nums.sort(sortNums);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== i) return i;
//     // else if at the end return i+1
//     if (i === nums.length - 1) return i + 1;
//   }
// }

// VER.2 not mine 76ms
// Gauss' Formula
// We can compute the sum of nums in linear time, and by Gauss' formula, we can compute the sum of the first nn natural numbers in constant time. Therefore, the number that is missing is simply the result of Gauss' formula minus the sum of nums, as nums consists of the first nn natural numbers minus some number.

function missingNumber(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
}

export default missingNumber;
