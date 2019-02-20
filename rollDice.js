let numberOfDice = process.argv.slice(2);

let generateDice = function(howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    let roll = Math.random() * (6 - 1) + 1;
    console.log(Math.floor(roll));
  }
};

generateDice(numberOfDice);
