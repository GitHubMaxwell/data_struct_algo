function compareNumbers(a, b) {
  return a - b;
}
// Problems
// didnt account for more than one missing number and then comparing them
// function missingInt(arr) {
//   if (arr.length < 2) return 1;
//   arr.sort(compareNumbers); //?
//   // arr;//?
//   // handling negative numbers? return 1
//   let search;
//   for (let i = 0; i < arr.length - 1; i++) {
//     // minus one because we dont need to check the last number
//     // what is the current value
//     // see if the value we are on plus one exists
//     search = arr[i] + 1; //?
//     arr.includes(search); //?
//     if (!arr.includes(search)) {
//       return arr[i] + 1 < 0 ? 1 : arr[i] + 1; //?
//     }
//   }
// }
// let bigArray = [];
// (function() {
//   for (let i = 0; i < 10000; i++) {
//     if (i === 4000) continue; // missing number
//     bigArray.push(i);
//   }
// })();

function missingInt(arr) {
  // ALGO
  // take in array
  // iterate through array
  // identify missing numbers and add them to map
  // go through numbers and return smallest positve number
  // handle for if the given array is one element in size
  // if the numbers available are negative return 1

  if (arr.length < 2) return 1;
  let min = 1;
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(arr[i] + 1) && arr[i] + 1 > 0) {
      if (!map[arr[i] + 1]) {
        map[arr[i] + 1] = true;
      }
    }
  }

  if (Object.keys(map).length === 0) return 1;

  while (!map[min]) min++;

  return min; //?
}

// let array = [1, 3, 6, 4, 2]; // 5
let array = [-1, -3]; // 1
// let array = [-1, -3, -5, 1, 4, 2, 4]; // 3
// let array = [-1, 2, -3, 1, -5, 4, 4]; // 3
// let array = [3]; // 1
missingInt(array); //?
// missingInt(bigArray); //?
