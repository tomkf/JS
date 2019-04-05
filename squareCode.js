//for information about square code visit: https://en.wikipedia.org/wiki/Four-square_cipher
//once given string is arranged into "box" it will be encrypted from top down, left to right




function convertToBox(str) {
  let wordToEncode = str.split(" ").join("");
  let printInput = wordToEncode.split("").length; // total number of chars.

  let charactersForEachLine = Math.ceil(Math.sqrt(wordToEncode.length)); //squared number of chars.

  let encoded = [];

  for (let i = 0; i < printInput; i += charactersForEachLine) {
    encoded.push(wordToEncode.substring(i, i + charactersForEachLine));
  }

  return encoded;
}


function convertToCode(str) {
  let box = convertToBox(str);

  let counter = 0;
  let sentance = " ";
  while (counter <= box.length) {
    let word = " ";

    box.forEach(function(element) {
      let letterDesired = element.charAt(counter);
      word += letterDesired;
    });

    sentance += word += " ";
    counter++;
  }
  console.log(sentance);
}

convertToCode(
  "If man was meant to stay on the ground god would have given us roots"
);

//output:   Imtgdvs  fearwer  mayoogo  anouuio  ntnnlvt  wttddes  aohghn  sseoau
