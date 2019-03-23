// %20 represents a space character.
// Key-value pairs are represented using an = character: key=value
// Multiple key-value pairs are separated using a & character: key1=value1&key2=value2

// ex:
// city=Vancouver&weather=lots%200f%20rain
// {
//     city: "Vancouver",
//     weather: "lots of rain"
//   }

const urlDecode = function(text) {
  let finalObj = {};
  let sortingGroup = [];
  let splitIntoKeys = text.split("&");
  for (let i = 0; i < splitIntoKeys.length; i++) {
    sortingGroup.push(splitIntoKeys[i].split("="));
    for (let i = 0; i < sortingGroup.length; i++) {
      let iterator = sortingGroup[i];
      finalObj[iterator[0]] = iterator[1];
    }
  }
  for (value in finalObj) {
    let source = finalObj[value];
    let correct = source.split("%20");
    finalObj[value] = correct.join(" ");
  }
  return finalObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("dog=Black%20Lab"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

//output:
//   {duck: "rubber"}
// {dog: "Black Lab"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"
