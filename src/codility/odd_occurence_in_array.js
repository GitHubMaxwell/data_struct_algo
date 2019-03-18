// to sort multi digit integers you need this helper function as callback
// function compareNumbers(a, b) {
//   return a - b;
// }

// function testFunc(arr) {
//   //   arr.sort();
//   arr.sort(compareNumbers);
//   return arr[0];
// }

// // convert integer/decimal to binary
// console.log((11).toString(2));
// console.log(parseInt(11).toString(2));

// // let array = [5,2,1,3,4];
// let array = [52, 21, 14, 3, 4];
// testFunc(array); //?

// ================= //
//     QUESTION
// ================= //

// given an array of an odd amount of values, return the unpaired value
// always pairs and one single?
// will sorting help (helps put it at O(n) time)

// ALGO

// take in array
// declare "current" variable
// declare "counter" variable (keep track of "current" value occurences)
// declare "unique" (if the "current" initial varible isnt followed by a duplicate then that is the unique value = return array[i]) - DONT need a variable for this
// sort the array
// iterate over the array
// if "counter" === 0 set "current" = array[i] and "counter" = 1
// set current value = the current element - array[i];
// if array[i] !== "current" && "counter" < 2 = return array[i]
// else keep "current" the same and ADD to the "counter"
// if "counter" === 2 = set "current" = null and "counter" = 0
// (what if there are like 4 like nmber in a row)

// helper function to sort array of integers
function compareNumbers(a, b) {
  return a - b; //?
}

function findUnique(arr) {
  if (arr.length < 3) return 'Array too small';
  let counter = 1;
  arr.sort(compareNumbers); //?
  let current = arr[0]; //?

  for (let i = 1; i <= arr.length; i++) {
    // NOTE: have to put it <= AND w/o the - 1 because at the worst case the unique number is at the end and we need to have it iterate to the arr.length + 1 position to validate
    i;
    if (arr[i] === current) {
      //   i;
      counter++;
      if (counter === 2) {
        i;
        counter = 1;
        current = arr[i + 1]; //?
        i++;
      }
    } else {
      i;
      return current;
    }
  }
}

// odd number array of multi-dups and one unique
// const array = [1, 3, 4, 1, 3, 4, 6];
const array = [1, 3, 4, 6, 3, 4, 6];
// const array = [9, 3, 9, 3, 9, 7, 9];
// const array = [];
findUnique(array); //?

// TODO: refactor to look ahead instead of waiting until youve completely iterator again to check

// TIP: can use bitwise operator to detect dups
// how

// FIX below
function bitwiseUnique(arr) {
  let result = 0;
  for (ele of arr) {
    //its also sorting it?
    ele ^= result; //?
  }
  return result; //?
}

bitwiseUnique(array); //?
