// [[1, 2], [2, 3]]
// The first will be the value to repeat, the second will be the amount of times to repeat that value.

let repeatNumbers = function(data) {
  let newarray = [];
  for (let i = 0; i < data.length; i++) {
    let subArray = data[i];
    let repeatNumber = subArray[1];
    let value = subArray[0];
    for (let x = 0; x < repeatNumber; x++) {
      newarray.push(value);
    }
  }
  return newarray.join(" ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// Output
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292
