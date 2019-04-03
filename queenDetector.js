function generateBoard(whiteQueen, blackQueen) {
  let whiteIndexProvided = whiteQueen[0];
  let whiteArrayItem = whiteQueen[1];
  let blackIndexProvided = blackQueen[0];
  let blackArrayItem = blackQueen[1];

  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  let whitePosition = board[whiteIndexProvided];
  whitePosition[whiteArrayItem] = 1;
  let blackPosition = board[blackIndexProvided];
  blackPosition[blackArrayItem] = 1;

  console.log(board);
}

let whit3 = [0, 5];
//
let black = [5, 0];

generateBoard(whit3, black);

function queenThreat() {}
