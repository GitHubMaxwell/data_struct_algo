import sortNum from '../utils/sortNumbers';
// exactly ONE element missing in an array
// find the element
// array unsorted

// ALGO
// iterate through array
// see if the current element value + 1 exists in the array
// if it doesnt return that element
// else go to next iteration

// ASSUMPTIONS
// array is unsorted
// all elements increment by one N + 1
// all elements are distinct
// array's element's value range 1 <= X <= 100,000

// EDGE cases
// YES: array is empty
// NO: array includes negative integers
// an array of two elements will have a
// all given arrays besides size 0 OR 1 will have exactly one missing element???
// what should array of zero OR one size length return?

// function permMissingElem(arr) {
//   if (arr.length === 0) 'Empty';
//   if (arr.length === 1) arr[0];
//   let min = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr.includes(min)) return min;
//     min++;
//   }
// }

// someone elses answer
function permMissingElem(arr) {
  arr.sort(sortNum);
  arr; //?

  let missing = 1; // starting value to check for
  let i = 0; // for incrementing through the array

  while (missing == arr[i]) {
    missing++;
    i++;
  }
  return missing; //?
}

// let array = [1, 2, 3, 4, 6, 7, 8]; // 5
// let array = [2,3,4,5]; // 1
// let array = []; // returns 1
// let array = [1]; // considered missing the number 2?
// let array = [1, 3];
// let array = [2, 1]; // 3: CHECK RIGHT the missing value is 3 even though the array
let array = [2, 3]; // 1: CHECK LEFT by having the missing value ALREADY SET to 1 which is defined as the starting point for the array
permMissingElem(array); //?
