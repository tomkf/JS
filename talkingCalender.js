// takes in a date string with the format YYYY/MM/DD, and
// returns a new human readable date that looks like December 2nd, 2017

let talkingCalendar = function(date) {
  let yearIsolate = date.slice(0, 4);
  let monthIsolate = date.slice(5, 7);
  let dayIsolate = date.slice(8, 10);

  switch (monthIsolate) {
    case "01":
      monthIsolate = "Januarary";
      break;
    case "02":
      monthIsolate = "February";
      break;
    case "03":
      monthIsolate = "March";
      break;
    case "04":
      monthIsolate = "April";
      break;
    case "05":
      monthIsolate = "May";
      break;
    case "06":
      monthIsolate = "June";
      break;
    case "07":
      monthIsolate = "July";
      break;
    case "08":
      monthIsolate = "August";
      break;
    case "09":
      monthIsolate = "September";
      break;
    case "10":
      monthIsolate = "October";
      break;
    case "11":
      monthIsolate = "November";
      break;
    case "12":
      monthIsolate = "December";
      break;
      defaut: "not a vaild month";
  }

  if (dayIsolate.charAt(1) === "01") {
    dayIsolate = "1st";
  } else if (dayIsolate.charAt(1) === "2") {
    dayIsolate = "2nd";
  } else if (dayIsolate.charAt(1) === "3") {
    dayIsolate = "3rd";
  } else {
    dayIsolate = dayIsolate + "th";
  }

  return `${monthIsolate} ${dayIsolate} ${yearIsolate}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// Output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
