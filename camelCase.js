let camelCase = function(input) {
  let divide = input.split(" ");
  for (i = 0; i < divide.length; i++) {
    let capitalize = divide[i].charAt(0).toUpperCase() + divide[i].slice(1);
    divide[i] = capitalize;
  }
  let betterString = divide.join("");
  return betterString.charAt(0).toLowerCase() + betterString.slice(1);
};

console.log(camelCase("this is a string"));
console.log(camelCase("this is also a string"));
console.log(camelCase("supercalifragalisticexpialidocious"));

//   Output
//   thisIsAString
//   thisIsAlsoAString
//   supercalifragalisticexpialidocious
