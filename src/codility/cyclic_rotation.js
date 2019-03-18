// ================= //
//     QUESTION
// ================= //

// given an array conssiting of N integers
// rotation = each element is shifted one index to the right -> i + 1;
// last element goes to the front
// needs to be IN PLACE?
// rotate array K times

// NOTES
// iterate and swap
// can we calculate the new indexes of each element and
// (currentIndex + k) - arr.length of array (needs a conditional if currentIndex + k is greater than the length of the array)
// let idx = (currentIndex + k) - arr.length;
// E: 2 + 3 = 5 - 5 = 0
// newArr[idx] = arr[i];
// E: 0 + 3 = 3
///// this handle s for 0 indexed NEEDS TO NOT be length minus 1

// ALGO
// function takes in array and number K how many position shifts to the right
// lets make it not in place for now
// declare 'newArray'
// (???) declare 'obj' to hold the values and their new indexes
//

function cyclicRotation(arr, k) {
  let newArr = [];
  if (k > arr.length) k = k % arr.length; //?
  for (let i = 0; i < arr.length; i++) {
    if (i + k >= arr.length) {
      let newIdx = i + k - arr.length;
      newArr[newIdx] = arr[i];
      continue;
    }
    newArr[i + k] = arr[i];
  }

  return newArr;
}

let array = [1, 2, 3, 4, 5, 6];
// let rot = array.length;
let rot = 95;
cyclicRotation(array, rot); //?
