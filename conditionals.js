// adds only the numbers in the array which match the given condition.


let conditionalSum = function(values, condition) {
  conditionSum = 0;
  antiConditionSum = 0;
  if (condition === "even") {
    for (var i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        conditionSum = conditionSum += values[i];
      }
    }
    return conditionSum;
  } else if (condition === "odd") {
    for (var x = 0; x < values.length; x++) {
      if (values[x] % 2 !== 0) {
        antiConditionSum = antiConditionSum += values[x];
      }
    }
    return antiConditionSum;
  } else {
    return 0;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
