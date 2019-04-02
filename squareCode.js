function convertToBox(str) {
  let wordToEncode = str.split(" ").join("");
  let printInput = wordToEncode.split("").length; // 54

  let charactersForEachLine = Math.ceil(Math.sqrt(wordToEncode.length)); //8
  let printTimes = Math.ceil(printInput / charactersForEachLine); //7

  let encoded = [];

  for (let i = 0; i < printInput; i += charactersForEachLine) {
    encoded.push(wordToEncode.substring(i, i + charactersForEachLine));
  }

  return encoded;
}

function convertToCode(str) {
  let box = convertToBox(str);
  console.log(box);

  let index = box[0];

  box.forEach(something);

  function something(arr) {
    let count = 0;
    let smallArray = [];
    for (i = 0; i < box.length; i++) {
      console.log();
    }
  }
}

convertToCode(
  "If man was meant to stay on the ground god would have given us roots"
);

// function convertToCode(str) {
//     let box = convertToBox(str);
//     console.log(box);
//     let encoded = [];

//     for (i = 0; i < box.length; i++) {
//       let index = box[i];
//       let arr = [];

//       for (x = 0; x < index.length; x++) {
//         let char = 0;
//         let nextLetter = index.charAt(char);
//         arr.push(nextLetter);
//       }
//       console.log(arr);
//     }
//   }
