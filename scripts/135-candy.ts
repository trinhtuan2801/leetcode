// function candy(ratings: number[]): number {
//   let L = 0;
//   let R = 1;
//   let sum = 0;
//   for (let i = 0; i < ratings.length; i++) {
//     console.log('--------------------------------');
//     console.log(ratings[i]);
//     if (ratings[i] > ratings[i - 1]) {
//       console.log('go up');
//       if (R === 1) {
//         L++;
//         sum += L;
//         console.log('R = 1');
//       } else if (R > 1) {
//         if (R > L) sum += R - L;
//         L = 2;
//         R = 1;
//         sum += L;
//         console.log('R > 1');
//       }
//     } else if (ratings[i] < ratings[i - 1]) {
//       console.log('go down');
//       R++;
//       sum += R;
//     } else {
//       console.log('go flat');
//       if (R === 1) {
//         L = 1;
//         sum += L;
//         console.log('R = 1');
//       } else if (R > 1) {
//         if (R > L) sum += R - L;
//         L = 1;
//         R = 1;
//         sum += L;
//         console.log('R > 1');
//       }
//     }
//     console.log({ R, L, sum });
//   }
//   if (R > 1 && R > L) {
//     console.log('remain');
//     sum += R - L;
//   }
//   return sum;
// }

function candy(ratings: number[]): number {
  let L = 1;
  let R = 1;
  let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      if (R > 1) {
        if (R > L) {
          sum -= L;
        } else {
          sum -= R;
        }
        L = 1;
        R = 1;
      }

      L++;
      sum += L;
    } else if (ratings[i] < ratings[i - 1]) {
      R++;
      sum += R;
    } else {
      if (R > 1) {
        if (R > L) {
          sum -= L;
        } else {
          sum -= R;
        }
      }

      L = 1;
      R = 1;
      sum += L;
    }
  }
  if (R > 1) {
    if (R > L) {
      sum -= L;
    } else {
      sum -= R;
    }
  }

  return sum;
}

const ratings = [1, 2, 3, 4, 3];

console.log(candy(ratings));

/*
V 1 2 3 4 3
L 1 2 3 4 1 
R 1 1 1 1 2

+1 +2 +3 +1 

*/
