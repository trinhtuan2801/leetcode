/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = [nums[0]];
  for (let i = 1; i < nums.length - 1; i++) {
    left.push(nums[i] * left[i - 1]);
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 1; i--) {
    left[i] = left[i - 1] * right;
    right *= nums[i];
  }
  left[0] = right;
  return left;
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));
