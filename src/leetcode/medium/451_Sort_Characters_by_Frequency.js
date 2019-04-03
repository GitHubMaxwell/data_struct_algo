// Given a string, sort it in decreasing order based on the frequency of characters.

// ASSUMPTIONS
// upper lower case are considered different
// cant just sort = alphabetical
// put all in obj and then iterate over obj builing string and minusing values from keys

// CURRENT GOAL
// populate obj with letters and frequencies
// if letter frequency exists as key

function frequencySort(s) {
  let obj = {};
  let str = '';
  for (let char of s) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  //   Object.entries(obj);//?
  for (let i = 1; i <= s.length; i++) {
    // find
    //concat string together
  }

  return str;
}

export default frequencySort;
