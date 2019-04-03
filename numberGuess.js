let randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);
let input = process.argv[2];
if (input > 20) {
  console.log("too high! pick another number");
} else if (input === randomNumber) {
  console.log("correct!");
} else {
  console.log("guess again!!");
}
