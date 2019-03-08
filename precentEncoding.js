const urlEncode = function(text) {
  let value = text;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === " ") {
      value[i] = "%";
    }
    console.log(value);
  }
};

console.log(urlEncode("URL Name"));
console.log(urlEncode(" URL Name "));
console.log(urlEncode("blue is greener than purple for sure"));

// Expected Output
// URL%20Name
// URL%20Name
// blue%20is%20greener%20than%20purple%20for%20sure

