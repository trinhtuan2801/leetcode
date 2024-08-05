/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const openBracket = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
  for (const bracket of s) {
    if (!openBracket[bracket]) stack.push(bracket);
    else if (openBracket[bracket] !== stack.pop()) return false;
  }
  if (stack.length === 0) return true;
  return false;
};

console.log(isValid('(){}['));
