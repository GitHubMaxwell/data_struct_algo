// VER.1 - nested loops = BigO(n^2);
export function findDuplicates(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        return true;
      }
    }
  }
  return false;
}

// VER.2 - Linear Time = BigO(N) but Space = BigO(N)
export function findDuplicatesHash(a) {
  let hash = {};
  for (let i = 0; i < a.length; i++) {
    if (hash[a[i]]) {
      return true;
    } else {
      hash[a[i]] = 1;
    }
  }
  return false;
}

// VER.3 Linear Time but using an Array in a clever manner
export function findDuplicatesArray(a) {
  let array = [];
  for (let i = 0; i < a.length; i++) {
    // if (array[a[i]] === undefined) {
    if (array[a[i]]) {
      return true;
    } else {
      // could be anything just occupy that space with a truthy value
      array[a[i]] = 1;
    }
  }
  return false;
}
