/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let L = 0;
  let R = height.length - 1;
  let maxL = height[L];
  let maxR = height[R];
  let sum = 0;

  while (L < R) {
    if (height[L] < height[R]) {
      L++;
      maxL = Math.max(maxL, height[L]);
      sum += maxL - height[L];
    } else {
      R--;
      maxR = Math.max(maxR, height[R]);
      sum += maxR - height[R];
    }
  }

  return sum;
};

const height = [4, 2, 0, 3, 2, 5];

console.log(trap(height));
