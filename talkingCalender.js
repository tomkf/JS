// takes in a date string with the format YYYY/MM/DD, and
// returns a new human readable date that looks like December 2nd, 2017

let talkingCalendar = function(date) {
  let yearIsolate = date.slice(0, 4);
  let monthIsolate = date.slice(5, 7);
  let dayIsolate = date.slice(8, 10);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// Output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
