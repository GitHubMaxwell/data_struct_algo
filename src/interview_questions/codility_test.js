import numSort from '../utils/sortNumbers';

// ASSUMPTIONS
// smallest integer that DOES NOT occur in given array
// larger than 0

// ALGO
// declare let small = 1;
// iterate through array and checking in smallest indexOf in array
// iterate infinitly until you find the value that doesnt exist in the array and return
// if -1 return small
// else iterate and small = i + 1;

// iterate through array and is a[i] > small
// everytime you iterate you see if theres indexOf small
// if -1 then small++
// sort

function question2(A) {
  let small = 1;

  // A.sort(numSort);

  while (true) {
    // VER. 4
    if (A.includes(small) === false) {
      // it DOESNT exist in the array
      break;
    }
    // it exists in the array
    small++;

    // VER. 3
    // if (A.indexOf(small) === -1) {
    //   // it DOESNT exist in the array
    //   small; //?
    //   break;
    // } else {
    //   // it exists in the array
    //   small++;
    // }
  }
  //   for (let i = 0; i < A.length; i++) {
  //     // VER. 2
  //     // without sort just iterate and check indexOf small
  //     // works w/w/o sort
  //     // DANGER: depending on the size of the array
  //     if (A.indexOf(small) === -1) {
  //       // it DOESNT exist in the array
  //       i; //?
  //       break;
  //     } else {
  //       // it exists in the array
  //       small++;
  //     }

  //     // // VER. 1
  //     // // requires array to be sorted first
  //     // if (A[i] == small) {
  //     //   small = A[i] + 1;
  //     //   if (A.indexOf(small) === -1) {
  //     //     break;
  //     //   }
  //     // }
  //   }
  return small; //?
}

export default question2;
