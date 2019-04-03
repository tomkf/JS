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

function queenThreat() {
  let whiteQueen = white;
  let blkQueen = black;
  let white0 = whiteQueen[0];
  let white1 = whiteQueen[1];
  let diagonalValue1 = white1 - white0;
  let black0 = blkQueen[0];
  let black1 = blkQueen[1];
  let diagonalValue2 = black1 - black0;

  white0 === black0
    ? console.log("Horizonal Threat: True")
    : console.log("Horizonal Threat: False");
  white1 === black1
    ? console.log("Vertical Threat: True")
    : console.log("Vertical Threat: False");

  Math.abs(diagonalValue1) === Math.abs(diagonalValue2)
    ? console.log("Diagonal Threat: True")
    : console.log("Diagonal Threat: False");
}

let white = [0, 7];
//
let black = [7, 0];

generateBoard(white, black);

queenThreat();
