// leet code #1 easy

// QUESTION
// given an array of integers and given the target sum
// RETURN indices of the two numebrs such that they add up to the target

// ASSUMPTIONS
// each input will have exactly one input
// -- each array will always be two or more and if its length 2 then it can be assumed that both equal the target?? -- question doesnt say what to give back if not found
// cant use the same element twice
// WILL they always be positive?
//

// ALGO
// function takes in array and target
// declare array that will hold the two indices of the solution
// search for index of the difference of the element you are on and the target = indexOf(array[i] - target)
// -- need Math.abs(...) for this?
// if it returns -1 move

// Big O
// time N
// space 1

// SOLUTION 1
// function twoSum(nums, target) {
//   let arr = [];
//   arr[0] = 0;
//   let search;

//   for (let i = 0; i < nums.length; i++) {
//     search = target - nums[arr[0]];
//     if (nums.indexOf(search) !== -1 && i !== arr[0]) {
//       i;
//       arr[0]; //?
//       search;
//       arr.push(nums.indexOf(search));
//       return arr;
//     }
//     arr[0] = i;
//   }
// }

// SOLUTION 2
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       let cur = nums[i];
//       for (let j = i + 1; j < nums.length; j++) {
//         if (target - cur === nums[j]) {
//           return [i, j];
//         }
//       }
//     }
//     return false;
//   };

// SOLUTION 3
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const search = target - nums[i];

    if (search in map) {
      // when nums = [3,2,4] and target = 6
      // at this point we are on index 2 = 4 and seeing if the value held in "search" matches a key value in "map" = which at this point = 2
      return [map[search], i];
    }
    // essentially you are placing all values into the map until you hit the value
    map[nums[i]] = i;
  }

  return null;
};

// SOLUTION THREE STEPS
// declare a hashmap
// declare the search value we are looking for in the array derived the difference between the target and the current element
// iterate over the array
// if the search value is already in the map
// -- return an array of the first values index and the next values index
// --

export default twoSum;
