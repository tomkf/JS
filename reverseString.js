//with reverse method
//////////////////////


function reverseMehthod(str) {
  let manipulateString = str.split("");
  return manipulateString.reverse().join("");
}

console.log(reverseMehthod("upsideDown"));

//output
// nwoDedispu




//with for loop
/////////////////


function reverseString(string) {
  let manipulateString = string.split("");
  let newArray = [];
  let strLength = string.length - 1;

  for (let i = strLength; i >= 0; i--) {
    let placeValue = manipulateString[i];
    newArray.push(placeValue);
  }

  return newArray.join("");
}

console.log(reverseString("upsideDown"));

//output
// nwoDedispu




//with single command line output
/////////////////////////////////////


let CL = process.argv.slice(2);

function reverseString(command) {
  return command.reverse().join("");
}

console.log(reverseString(CL));





//with multiple command line output
///////////////////////////////////////


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
