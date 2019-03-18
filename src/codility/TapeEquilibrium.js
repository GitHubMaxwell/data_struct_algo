// given a NON-EMPTY ARRAY "A" of "N" (length) integers, returns the MINIMAL difference that an be achieved
// abs difference between the sum of the first part and the sume of the second part
// what defines a part
// P is greater than 0 and less than the array "A"'s length (acts as an index)
//----
// NOTES
// use Math.abs

// ASSUMPTIONS
// array is 2 to 100,000 elements in size
// integers values range -1000 <= X <= 1000;

// EDGE CASES
// how to handle 2 elements
// duplicates allowed? return 0 im assuming?

// ALGO
// take in array
// if array size 2 return abs diff of two elements
// declare "diff" variable to hold initial difference
// do while statement to calculate first difference and continue on until end of array
// each iteration calculate difference and compare to see if LESS THAN "diff"
// -- if it is less then reassign "diff" this new value
// -- else nothing/continue
// once looping has concluded RETURN "diff"

function tapeEquil(arr) {
  if (arr.length === 2) Math.abs(arr[0] - arr[1]);
  let diff = 0;
  let i = 0;
  let p = 1;
  let ptemp = p;
  let map = {};
  let sum1 = 0;
  let sum2 = 0;
  let min = 0;
  while (p < arr.length) {
    while (i <= p - 1) {
      //   sum1 += arr[i]; //?
      sum1 += Math.abs(arr[i]);
      i++;
    }
    i = 0;
    while (ptemp < arr.length) {
      //   sum2 += arr[ptemp];
      sum2 += Math.abs(arr[ptemp]);
      ptemp++;
    }
    // sum1;
    // sum2;
    diff = Math.abs(sum1 - sum2);
    if (!map[diff]) map[diff] = true;
    p++;
    ptemp = p;
    sum1 = 0;
    sum2 = 0;
  }
  while (!map[min]) min++;
  return min;
}

// let array = [1, 2, 3, 4, 5];
// let array = [3, 1, 2, 4, 3]; // 1
// 13,
// let array = [1, 1]; // 0
// let array = [1, 2]; // 1
// let array = [-1, -2]; // 1
// let array = [-1, -2, -3, -4, -5];
let array = [-3, -1, -2, -4, -3]; // 1
tapeEquil(array); //?

// Julien Renaux Blog

// calulate entire sum
// then iterate once minusing from the second to last element down to the element index 1
// calulating the differnce

function tapeEquilibrium(arr) {
  let leftSum = (rightSum = 0);
  // let minDiff = Number.POSITIVE_INFINITY // why sset this to pos infinity
  // lets you set this to the largest number in JS because its a good starting point to do the first comparison in the if(minTemp < min)
  let min = Number.POSITIVE_INFINITY;

  // calculate the entire array sum
  arr.forEach(ele => {
    rightSum += ele;
  });
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    rightSum -= arr[i];
    minTemp = Math.abs(leftSum - rightSum);
    if (minTemp < min) {
      min = minTemp; //?
    }
  }
  return min;
}

tapeEquilibrium(array); //?
