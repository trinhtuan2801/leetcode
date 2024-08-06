/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const stack = [];

  const next = (openBr, closeBr) => {
    if (openBr + closeBr === n * 2) {
      result.push(stack.join(''));
      return;
    }
    if (openBr < n) {
      stack.push('(');
      next(openBr + 1, closeBr);
      stack.pop();
    }
    if (closeBr < openBr) {
      stack.push(')');
      next(openBr, closeBr + 1);
      stack.pop();
    }
  };

  next(0, 0);

  return result;
};

const n = 3;

console.log(generateParenthesis(n));
