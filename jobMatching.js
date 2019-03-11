// // For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary.
// Candidate's minimum salary included with 10% wiggle room (deducted from the candidate's minimum salary)
// If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

function match(candidate, job) {
  if (candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw "slaray of an item not specified";
  }
  let adjustAmount = candidate.minSalary / 1.1;
  if (adjustAmount <= job.maxSalary) {
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
