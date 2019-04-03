// given number n return the different permutations of how to climb stairs

// ASSUMPTIONS
// number n will always be a positive integer

// RESTRICTIONS
// can move only in 2 steps or 1 step

// ALGO
// num % 2 and have the remainder if any be 1 steps
// this is the maximum case for how many two
// from this remove a two and add two ones
// --
// start with only ones

// function climbStairs(n) {
//   let maxTwo = Math.floor(n / 2); //?
//   let maxOne = n; //?
//   let maxOne = n % 2; //?
//   // iterate until all ones
//   // n - maxTwo

//   for(let i = 0; i < n; i++) {

//   }

//   return 2;
// }

// VER.2 someone elses
// its the fibonacci sequence
var climbStairs = function(n) {
  let arr = [1, 2, 3];
  // Steps
  // start for i 3, n 5
  // arr[3] = arr[3-1] + arr[3-2]
  // arr[3] = 3 + 2 = 5
  // [1,2,3,5];
  // loop i 4, n 5
  // arr[4] = arr[4-1] + arr[4-2]
  // arr[4] = 5 + 3
  // break
  // [1,2,3,5,8]
  // return arr[5 - 1] = arr[4] = 8

  // what the arr for
  // whats the math trick happening
  // so we start at position 3 outside an array

  for (let i = 3; i < n; i++) {
    i; //?
    arr[i] = arr[i - 1] + arr[i - 2];
    arr[i]; //?
  }

  return arr[n - 1];
};

export default climbStairs;
