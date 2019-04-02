// given an array of numbers, return true if dups and false if not

function containsDuplicates(nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return true;
    }
    hash[nums[i]] = true;
  }
  return false;
}

export default containsDuplicates;
