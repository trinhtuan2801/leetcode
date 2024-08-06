/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const stackTop = stack.pop();
      result[stackTop] = i - stackTop;
    }
    stack.push(i);
  }
  return result;
};

const temperatures = [1, 0, 2, 1, 1, 3];

console.log(dailyTemperatures(temperatures));
