function convertToBox(str) {
  let wordToEncode = str.split(" ").join("");
  let printInput = wordToEncode.split("").length; // 54

  let charactersForEachLine = Math.ceil(Math.sqrt(wordToEncode.length)); //8

  let encoded = [];

  for (let i = 0; i < printInput; i += charactersForEachLine) {
    encoded.push(wordToEncode.substring(i, i + charactersForEachLine));
  }

  return encoded;
}

function convertToCode(str) {
  let box = convertToBox(str);
  console.log(box);

  let arr = [];
  for (i = 0; i < box.length; i++) {
    let counter = i;
    let index = box[counter];
    let letter = index.charAt(0);

    arr.push(letter);
  }
  console.log(arr);
}

convertToCode(
  "If man was meant to stay on the ground god would have given us roots"
);
