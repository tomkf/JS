let camelCase = function(input) {
  let devide = input.split(" ");
  let newWord = [];
  for (i = 0; i < devide.length; i++) {
    let cap = devide[i];
    let make = cap.charAt(0).toUpperCase() + cap.slice(1);
    newWord.push(make);
  }
  let betterString = newWord.join("");
  return betterString.charAt(0).toLowerCase() + betterString.slice(1);
};

console.log(camelCase("this is a string"));
console.log(camelCase("this is also a string"));
console.log(camelCase("supercalifragalisticexpialidocious"));

//   Output
//   thisIsAString
//   thisIsAlsoAString
//   supercalifragalisticexpialidocious
