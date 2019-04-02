// given a string
// create hash map of roman to integer mappings
// iterate over string adding to the total
// return total
// handling 4 and 9
// -- have a I before V or X
function romanToInt(s) {
  let convert = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    // if (s[i] === 'I' && s[i + 1] === 'V') {
    //   num += 4;
    //   i++;
    //   continue;
    // }
    // if (s[i] === 'I' && s[i + 1] === 'X') {
    //   num += 9;
    //   i++;
    //   continue;
    // }
    // VER.2 just need to know if the current element mapped value is less than the next and if it is the add the difference and move 2 spaces ahead in the iteration
    if (convert[s[i]] < convert[s[i + 1]]) {
      num += convert[s[i + 1]] - convert[s[i]];
      i++;
      continue;
    }
    num += convert[s[i]];
  }
  return num;
}

export default romanToInt;

// part of someone elses solution (i was intersted in how the Map constructor works)
const map = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
]);
map; //?
