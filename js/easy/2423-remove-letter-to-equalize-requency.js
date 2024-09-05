/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const freqs = new Array(26).fill(0);
  for (const char of word) {
    freqs[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < freqs.length; i++) {
    if (freqs[i] === 0) continue;
    freqs[i]--;
    const set = new Set(freqs);
    if ((set.has(0) && set.size === 2) || set.size === 1) return true;
    freqs[i]++;
  }

  return false;
};

console.log(equalFrequency('abcdefghijklmnopqrstuvwxyznabcdefghijklmnopqrstuvwxyz'));
