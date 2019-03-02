// organizeInstructors will receive an array of  objects, and will return a new object that has the following format:

// {
//   CourseName: [instructors]
// }

const organizeInstructors = function(instructors) {
  let finalObj = {
    iOS: [],
    Web: [],
    Blockchain: ["empty"]
  };

  for (let section of instructors) {
    if (section.course === "iOS") {
      finalObj.iOS.push(section.name);
    } else if (section.course === "Web") {
      finalObj.Web.push(section.name);
    } else if (section.course === "Blockchain") {
      finalObj.Blockchain.push(section.name);
    }
  }

  for (let property in finalObj) {
    if (property === ["empty"]) {
      delete finalObj.property;
    }
    return finalObj;
  }
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" }
  ])
);

//  Expected Output
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
