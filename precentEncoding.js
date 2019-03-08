const urlEncode = function(text) {
  let value = text;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === " ") {
      value[i] = "%";
    }
    console.log(value);
  }
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// Expected Output
// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure
