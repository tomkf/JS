// look at last two digits
// figure out number of 12s
// find remainder
// number of 4's in remainder
//  find day of month
// add month code

const getDayOfTheWeek = (month, day, year) => {
  const monthObj = {
    "1": 1,
    "2": 4,
    "3": 4,
    "4": 0,
    "5": 2,
    "6": 5,
    "7": 0,
    "8": 3,
    "9": 6,
    "10": 1,
    "11": 4,
    "12": 6
  };

  const daynames = {
    "-1": "Friday",
    "0": "Saturday",
    "1": "Sunday",
    "2": "Monday",
    "3": "Tuesday",
    "4": "Wednesday",
    "5": "Thursday"
  };

  //last two digits of year
  // a: check how many times 12 is divisible by this
  // b: get remainder of last two and 12
  // c: from this remainder, find how many "4s"
  // get sum of a + b + c + day of month (eg; 24) + "month code" from monthObj

  let strDate = year.toString();
  let workingVal = parseInt(strDate.substring(2));
  let a = Math.floor(workingVal / 12);
  let b = Math.floor(workingVal % 12);
  let c = Math.floor(b / 4);

  let sum = a + b + c + day + monthObj[month];
  let sum2 = sum % 7;

  let leapCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

  if (leapCheck && month < 3) {
    sum2 -= 1;
  }

  if (year > 1999) {
    sum2 -= 1;
  } else if (year > 1799 && year < 1900) {
    sum2 += 2;
  } else if (year > 1699 && year < 1800) {
    sum2 += 4;
  }

  return daynames[sum2];
};

// -----------------------------------------------------------------------------------------------------------------------------------

const generateCalender = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  let datePass = false;
  let reverseCondition = true;

  let months = [];

  for (let m = 1; m <= 12; m++) {
    months.push(m);
  }

  for (let i = 0; i < months.length; i++) {
    for (let y = 1; y <= daysInMonth[i]; y++) {
      let dayName = getDayOfTheWeek(months[i], y, 2019);
      let day_value = Math.round(
        Math.abs((new Date(2019, i, y) - today) / oneDay)
      );

      if (day_value == 1 && reverseCondition) {
        datePass = true;
        console.log(
          `Wait a second... ${monthNames[i]} ${y} 2019, is a ${dayName} TODAY!!!`
        );
        reverseCondition = false;
      } else if (datePass) {
        console.log(
          ` ${monthNames[i]} ${y} 2019, will be a ${dayName} in ${day_value +
            1} days `
        );
      } else {
        console.log(
          ` ${monthNames[i]} ${y} 2019, was a ${dayName} ${day_value -
            1} days ago `
        );
      } //final condition
    } //inner loop
  } //opening "month loop"
  console.log("end");
}; //closing function

generateCalender();
