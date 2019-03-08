// // A candidate will have a minimum salary, so it will look like this:

// // let candidate = {
// //   minSalary: 120000
// // }
// // A job will have a maximum salary, so it will look like this:

// // let job = {
// //   maxSalary: 140000
// // }
// If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

// // For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary.
// However, let's also include 10% wiggle room (deducted from the candidate's minimum salary)

function match(candidate, job) {
  if (candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw "slaray of an item not specified";
  }

  if (candidate.minSalary <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
}

console.log(match({ minSalary: 100 }, { maxSalary: 200 }));
//returns true

console.log(match({ minSalary: 200 }, { maxSalary: 150 }));
//returns false

console.log(match({ minSalary: 200 }, { wrongValue: 150 }));
//returns error
