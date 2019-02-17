let CL = process.argv.slice(2);

function reverseString(commandInput) {
  var newString = "";
  for (var i = commandInput.length - 1; i >= 0; i--) {
    newString += commandInput[i];
  }
  return console.log(newString);
}

let calls = CL.map(reverseString);
console.log(calls.join("\n"));
