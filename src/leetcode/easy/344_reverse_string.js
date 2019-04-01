// write a function that takes ina string and reverses it and returns the reverse
// input is an arrya of character strings

// assume all characters are printable ascii characters

// RESTRICTIONS
// must be done in place

function reverseString(strArr) {
  if (!strArr || strArr.length === 0) return 0;
  if (strArr.length < 2) return strArr;
  let temp;
  let i = 0;
  //   let left = strArr[i];
  //   let right = strArr[strArr.length - 1 - i];
  //   for (let i = 0; i < Math.ceil(strArr.length / 2); i++) {
  for (i; i < Math.ceil(strArr.length / 2); i++) {
    // only go through half the array
    temp = strArr[i];
    strArr[i] = strArr[strArr.length - 1 - i];
    strArr[strArr.length - 1 - i] = temp;

    // this only changes the values stored in the variable, not the actual array
    // temp = left;
    // left = right;
    // right = left;
  }
  return strArr; //?
}

export default reverseString;
