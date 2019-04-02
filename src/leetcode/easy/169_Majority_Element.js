// given an array
// identify what element occurs more than half the size of the array

// ASSUMPTIONS
// always be a majority element in an array
// array is never non-empty

// ALGO
// sort

// ERROR
// did "return nums[Math.ceil(nums / 2)];"
// -- instead of nums.length
// nums[Math.floor(nums.length / 2)]
// better to use floor because it handles both even and odd length arrays considering that after sorting the number should

// NOTES
// even sized arrays versus odd sized arrays

import numSort from '../../utils/sortNumbers';

function majorityElement(nums) {
  nums.sort(numSort);
  return nums[Math.floor(nums.length / 2)]; //?
}

export default majorityElement;
