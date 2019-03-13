// makeCase will receive an input string and one or more casing options.
//  Returns a new string that is formatted based on casing argument given to it

// order of casing precedent
// 1.camel, pascal, snake, kebab, title
// 2.vowel, consonant
// 3.upper, lower

const makeCase = function(input, caseMethod) {
  let divide = input.split(" ");

  if (caseMethod === "camel") {
    for (i = 0; i < divide.length; i++) {
      let capitalize = divide[i].charAt(0).toUpperCase() + divide[i].slice(1);
      divide[i] = capitalize;
    }
    let betterString = divide.join("");
    return betterString.charAt(0).toLowerCase() + betterString.slice(1);
  } else if (caseMethod === "pascal") {
    for (i = 0; i < divide.length; i++) {
      let capitalize = divide[i].charAt(0).toUpperCase() + divide[i].slice(1);
      divide[i] = capitalize;
    }
    let betterString = divide.join("");
    return betterString;
  } else if (caseMethod === "snake") {
    for (i = 0; i < divide.length; i++) {
      let encode = divide[i] + "_";
      divide[i] = encode;
    }
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
// makeCase("this is a string", "kebab");
// makeCase("this is a string", "title");
// makeCase("this is a string", "vowel");
// makeCase("this is a string", "consonant");
// makeCase("this is a string", ["upper", "snake"]);
