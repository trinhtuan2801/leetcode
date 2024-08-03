function candy(ratings) {
  let L = 1;
  let R = 1;
  let sum = 0;
  const peaks = [];
  let sharedValeys = 0;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      if (R > 1) {
        peaks.push([L, R]);
        L = 1;
        R = 1;
        sharedValeys++;
      }
      L++;
    } else if (ratings[i] < ratings[i - 1]) {
      R++;
    } else {
      peaks.push([L, R]);
      L = 1;
      R = 1;
    }
  }
  peaks.push([L, R]);
  const sigma = (start, end) => {
    if (end === 0) return 0;
    return ((end + start) * (end - start + 1)) / 2;
  };
  for (const [L, R] of peaks) {
    sum += sigma(1, L - 1) + sigma(1, R - 1) + Math.max(L, R);
  }

  sum -= sharedValeys;

  return sum;
}

const ratings = [1, 2, 87, 87, 2, 1];
console.log(candy(ratings));
