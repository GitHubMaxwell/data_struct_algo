import sortNums from '../utils/sortNumbers';

function binarySearch(a, target) {
  a.sort(sortNums);
  a;
  target;
  // index to start at
  let center = Math.floor(a.length / 2);
  center;
  if (a[center] === target) return true;

  // ALGO
  // is the a[center] the target
  // else if is it larger
  // - call the function again except with a spliced array
  //   a.forEach((val, idx) => {
  //     console.log(val, idx);
  //   });
}

export default binarySearch;
