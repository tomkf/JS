// look at last two digits
// figure out number of 12s
// find remainder 
// number of 4's in remainder
//  find day of month 
// add month code

const getDayOfTheWeek = (month, day, year) => {
 const daynames = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
//last two digits of year 
// check how many times 12 is divisible by this (a)
// get remainder of last two and 12  (b)
// from this remainder, find how many "4s" (c)
// get sum of a + b + c + day of month (eg; 24) + "month code"

  let strDate = year.toString();
  let workingVal = parseInt(strDate.substring(2))
  let a = Math.floor(workingVal / 12 )
  let b = Math.floor(workingVal % 12)
  let c = Math.floor(b / 4)

  const monthObj = { "1": 1, 
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
"12": 6 } 
  

let sum = a + b + c + day + monthObj[month]

let sum2 = sum % 7


//any year divisible by 4 is a leap year 



if (year > 1999) { 
    sum2 -= 1
} else if( year > 1799 && year < 1900){
sum2 += 2
} else if( year > 1699 && year < 1800){
    sum2 += 4
}

// if (year % 4 == 0 && (month == 1 || month ==2)){
//     sum2 - 1
// }


return daynames[sum2]
}

 getDayOfTheWeek(4, 7, 1991)


const generateCalender = () => {
let months = []
let dates = []
let monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", 'September', "October", "November", "December"]


//now pass condition to change these 

let datePass = false

const today = new Date()
const oneDay = 24 * 60 * 60 * 1000


for (let m = 1; m <= 12; m++){
    months.push(m)
}

for (let d = 1; d <= 31; d++){
    dates.push(d)
}

 for (let i = 0; i < months.length; i++){
     for (let y = 0; y < dates.length; y++){
        let dayName = getDayOfTheWeek(months[i], dates[y], 2019)
        let day_value = Math.round(Math.abs((new Date(2019, months[i], dates[y]) - today) / oneDay));
        
        if (day_value == 0){
            datePass = true
        }

        datePass ?   console.log(monthNames[i], dates[y], 2019, "will be a", dayName, "in", day_value, "days") : console.log(monthNames[i], dates[y], 2019, "was a", dayName, day_value, "days ago") 
    }
   }
console.log("end")
}

 generateCalender()




//["January", "Febuary", "March", "April", "May", "June", "July", "August", 'September', "October", "November", "December"];


// let dayName = getDayOfTheWeek(months[i], dates[y], 2019)
// let dayValue = Math.round(Math.abs((new Date(2019, months[i], dates[y]) - today) / oneDay));
//   console.log(`${dayName} ${dayValue}`)