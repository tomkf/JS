const instructorWithLongestName = function(instructors) {
  // will receive an array of instructor objects, and return the object that has the longest name.
  // If there are two instructors with the longest name, return the first one.
  let finalAnswer = 0;
  for (let startingPoint of instructors) {
    finalAnswer = startingPoint;
    for (let item of instructors) {
      if (item.name.length > finalAnswer.name.length) {
        finalAnswer = item;
      }
    }
  }
  return finalAnswer;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "StevenSeagal", course: "Web" },
    { name: "StevenSeagar", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
  ])
);
