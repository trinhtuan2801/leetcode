/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let currentNum = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (currentNum === nums[i]) {
      count++;
      if (count > 2) {
        nums.splice(i, 1);
        i--;
      }
    } else {
      currentNum = nums[i];
      count = 1;
    }
  }
};

const arr = [1, 1, 2, 2, 2, 3, 3];

removeDuplicates(arr);
console.log(arr);
