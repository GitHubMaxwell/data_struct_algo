// given an array nums
// write a function to move all 0's to the end of the array

// ALGO
// VER.1 sort and then swap of two pointers (isnt stable)
// VER.2 start two pointers at middle and work there way out?

// ERROR
// its mutating parts of the array that its not??
// not maintaining the order of non zero elements(keep the algorithm "stable")
// in VER.2 when a swap happened i needed to break; the inner loop to move the left pointer forward

// import numsSort from '../../utils/sortNumbers';

function moveZeroes(nums) {
  // // VER. 1 = error -> not stable
  // nums.sort(numsSort);
  // let temp;
  // let i = 0;
  // below only works if sorted and sorting in this problem makes it unstable
  // if (nums[i] !== 0) return nums;
  // for (i; i < Math.ceil(nums.length / 2); i++) {
  //   temp = nums[i];
  //   nums[i] = nums[nums.length - 1 - i];
  //   nums[nums.length - 1 - i] = temp;
  // }
  // let result = [1, 3, 12, 0, 0];
  // return result;

  // VER. 2 - two pointers both left
  // if left 0 stay else left++
  // if right 0 right++
  // swap

  // if (nums.length < 2) return nums;
  // // what about no nums array
  // let temp;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 0) {
  //     // if equal to zero then swap with right
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[j] !== 0) {
  //         temp = nums[i];
  //         nums[i] = nums[j];
  //         nums[j] = temp;
  //         break;
  //       }
  //     }
  //   }
  // }
  // return nums;

  // VER.4
  // SOMEONE elses Java 0ms version
  // -------//
  //   public void moveZeroes(int[] nums) {
  //     int zeroCount = 0;
  //     for (int i = 0; i < nums.length; i++) {
  //         if (nums[i] == 0) {
  //             zeroCount++;
  //         } else if (zeroCount > 0) {
  //             //swap with zero that is zeroCount to the left
  //             swap(nums, i, i - zeroCount);
  //         }
  //     }
  // }
  // VER.4 (clever) JS CONVERTED
  // -------// not that much faster than my original two pointer
  // by keeping count of zeroes you keep track of the left most available position to swap with a non-zero number once happen upon one
  // i.e.
  let zeroCount = 0;
  let temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroCount++;
    } else if (zeroCount > 0) {
      // swap with zero that is zeroCount to the left of i
      // nums[i] = right pointer
      // nums[i - zeroCounter] = left pointer
      temp = nums[i];
      nums[i] = nums[i - zeroCount];
      nums[i - zeroCount] = temp;
    }
  }
  return nums;

  // // VER. 5 someone elses
  // var moveZeroes = function(nums) {
  //   const len = nums.length;
  //   let i;
  //   for (i = 0; i < len; i++) {
  //     if (nums[i] === 0) {
  //       nums.push(nums.splice(i, 1));
  //       i = i - 1;
  //     }
  //   }
  // };
}

// can i do this kindof conditional???
// let numZeroes;
// numZeroes += (nums[i] == 0);

export default moveZeroes;
