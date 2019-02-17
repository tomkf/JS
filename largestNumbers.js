let sumLargestNumbers = function(data) {
  let sorted = data.sort(function(a, b) {
    return a - b;
  });

  let last = sorted.slice(-1)[0];

  let lastTwo = sorted.slice(-2)[0];

  return last + lastTwo;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
