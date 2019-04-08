// ALGO
// 1st passthrough, temp remove a[1]
// -- store in variable
// -- each passtrhough you store the i+1 value in variable
// SHIFTING PHASE
// -- compare value we are on a[0] and compare with stored value
// -- if temp < a[i] = swap
// -- loop backwards until a[i--] (look backwards) is > or i < 0
// ERRORS
// NO IF HERE because you check all elements in the array
// if (a[i + 1] < a[i]) {
// i dont think its j + 1. you start on where i is and work backwards - no i think it is because you shift the left value to the right per them being larger than temp
// a[j - 1] = a[j];
// -- move the left value right be reassigning the right value to the left
// the continue in the inner for loop is messing things up

// VER.1 - mine, doesnt work
export function insertionSort(a) {
  let temp;
  let j;

  for (let i = 0; i < a.length - 1; i++) {
    temp = a[i + 1];
    for (j = i + 1; j > 0; j--) {
      if (a[j - 1] > temp) {
        // shift forward the element
        a[j] = a[j - 1];
      } else {
        // break the loop once the j -1 is not greater than
        break;
      }
    }
    a[j] = temp;
    // console.log(a);
  }
  return a;
}
// let arr = [5, 4, 3, 2, 1];
// let arr = [5, 4, 2, 3, 1];
// insertionSort(arr); //?

// VER.2 - Book Example
export function insertionSortBook(a) {
  for (let i = 1; i < a.length; i++) {
    let position = i;
    let temp = a[i];

    while (position > 0 && a[position - 1] > temp) {
      // this goes backwards in the form of reassigning value and index to the previous as long as they position is greater than 0 && the value back one is greater than temp
      // overwrite the held value with the previous
      a[position] = a[position - 1];
      position = position - 1;
    }

    a[position] = temp;
  }
  return a;
}

let arr2 = [5, 4, 3, 2, 1];
insertionSortBook(arr2); //?
