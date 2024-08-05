/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const set = new Set();
  const boardSize = board.length;
  for (let row = 0; row < boardSize; row++) {
    set.clear();
    for (let col = 0; col < boardSize; col++) {
      const cellValue = board[row][col];
      if (cellValue !== '.' && set.has(cellValue)) return false;
      set.add(cellValue);
    }
  }
  for (let col = 0; col < boardSize; col++) {
    set.clear();
    for (let row = 0; row < boardSize; row++) {
      const cellValue = board[row][col];
      if (cellValue !== '.' && set.has(cellValue)) return false;
      set.add(cellValue);
    }
  }
  for (let startRow = 0; startRow < boardSize; startRow += 3) {
    for (let startCol = 0; startCol < boardSize; startCol += 3) {
      set.clear();
      for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
          const cellValue = board[row][col];
          if (cellValue !== '.' && set.has(cellValue)) return false;
          set.add(cellValue);
        }
      }
    }
  }
  return true;
};
const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
