// given a positive integer "n". reutrn the least amount of perfect squares in a number that SUM to the number

// a perfect square is a number that can be expressed as the PRODUCT of two numbers
// i.e. 9 = 3 * 3;

// NOTES
// whats a list of perfect square numbers that are below
// modulous itself and NO remainder AND less than
// is one a perfect square?

// ALGO
// calculate and store perfect squares LESS THAN target number
// from that list and starting at the largest number
// if number + iteself equals the target
// if less than see if the difference left over exists in the bank
// then see if you can find a sum to equal the difference
// find how many summed equal the given target number

function numSquares(n) {
  let squares = {};
  let sqr;
  // calculate and store squares that are smaller than the target number
  for (let i = 1; i * i < n; i++) {
    sqr = i * i;
    if (!squares[sqr]) {
      squares[sqr] = true;
    }
  }

  // now go through the object of squares and see if the difference exists
  //   Object.keys(squares); //?
  let search;
  //   Object.keys(squares).length - 1; //?
  for (let j = Object.keys(squares).length - 1; j >= 0; j--) {
    search = n - Object.keys(squares)[j];
    search; //?
    if (squares[search]) {
      // if this exists see if the difference between it and n exists
      search; //?
    }
  }
  // minus to see which  no remainders
  // if the difference doesnt exist then move to the next smallest element in the arrya and check again
  search; //?
  squares; //?
}
let n = 12;
// return
numSquares(n); //?
