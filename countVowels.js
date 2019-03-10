let numberOfVowels = function(data) {
  let vowelCounter = 0;
  let createArray = data.split("");
  for (i = 0; i < createArray.length; i++) {
    if (createArray[i] === "a") {
      vowelCounter++;
    } else if (createArray[i] === "e") {
      vowelCounter++;
    } else if (createArray[i] === "i") {
      vowelCounter++;
    } else if (createArray[i] === "o") {
      vowelCounter++;
    } else if (createArray[i] === "u") {
      vowelCounter++;
    }
  }
  return vowelCounter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("aeiou"));
//expected output
// 3
// 5
