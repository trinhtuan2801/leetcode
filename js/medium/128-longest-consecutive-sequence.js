/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = {};
  for (const num of nums) {
    map[num] = true;
  }
  let result = 0;
  for (const num of nums) {
    const prevNum = num - 1;
    if (map[prevNum]) continue;
    let count = 1;
    let nextNum = num + 1;
    while (map[nextNum]) {
      nextNum++;
      count++;
    }
    result = Math.max(result, count);
  }
  return result;
};

const nums = [];

console.log(longestConsecutive(nums));
