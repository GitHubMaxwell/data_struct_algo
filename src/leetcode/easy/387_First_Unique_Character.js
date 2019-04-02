// given a string, find the first non-repeating letter

// NOTES
// always linear because you have to check all chars in the string

// ALGO
// iterate though string
// build hash
// once you

// VER.1 mine 100ms (faster 75%)
// optimize to store index in hash too
// VER.2 mine after optimization 96ms (faster 83%)

function firstUniqChar(s) {
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      //   hash[s[i]]++;
      hash[s[i]][1]++;
    } else {
      //   hash[s[i]] = 1;
      hash[s[i]] = [i, 1];
    }
  }
  for (let key in hash) {
    if (hash[key][1] === 1) return hash[key][0];
    // if (hash[key] === 1) return s.indexOf(key);
  }
  return -1;
}

export default firstUniqChar;
