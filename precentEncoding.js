const urlEncode = function(text) {
  let convertToArray = text.split("");
  for (let i = 1; i < convertToArray.length - 1; i++) {
    if (convertToArray[i] === " ") {
      convertToArray[i] = "%";
    }
  }
  let firstCheck = convertToArray.join("");
  let secondCheck = firstCheck.split("");
  for (let i = 0; i < secondCheck.length; i++) {
    if (secondCheck[0] === " ") {
      delete secondCheck[0];
    }
    return secondCheck.join("");
  }
  return firstCheck;
};
console.log(urlEncode("Url Name"));
console.log(urlEncode(" Url Name "));
console.log(urlEncode(" but what about this"));
console.log(urlEncode("blue is greener than purple for sure"));

// Expected Output
// URL%20Name
// URL%20Name
// blue%20is%20greener%20than%20purple%20for%20sure


