// find the duplicate number in an array #287 medium

// Assumptions
// only one duplicate - always though

// Restrictions
// must not modify the array = read only
// must use only constant EXTRA space O(1)
// runtime complexity less than O(n^2)
// only one duplicate

// ALGO
// iterate through half of array - not half
// Math.ceil or while loop
// compare indexOf and lastIndexOf
// if both found
// - return
// else iterate

// Big O Time = N = linear

// indexOf(arr[i]) && lastIndex(arr[i])

// MINE
// function findDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//       arr.indexOf(arr[i]); //?
//       arr.lastIndexOf(arr[i]); //?
//       return arr[i];
//     }
//   }
//   // always one duplicate number meaning that the array.length > 1
//   //   return 'No Dup';
// }

// SOMEONE ELSES - using a link list and find the cyclic point
var findDuplicate = function(nums) {
  let slow = nums[0],
    fast = nums[nums[0]];
  slow; //?
  fast; //?

  //here fast moves two steps at a time
  while (slow !== fast) {
    slow = nums[slow];
    slow;
    fast = nums[nums[fast]];
    fast;
  }
  fast = 0;

  //here fast move one step at a time
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

// let array = [1, 3, 4, 2, 2];
// return 2

// let array = [3,1,3,4,2];
// return 3

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 3, 3, 3, 3];
// return 3

// let array = [2, 2];
// 2

findDuplicate(array); //?

export default findDuplicate;
