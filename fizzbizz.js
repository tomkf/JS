const fizzbizz = (num) => {
let arr = []

for (let i = 1; i <= num; i++){
  if (i % 3 === 0 && i % 5 === 0){
   arr.push("fizzbizz") 
  } else if (i % 3 == 0){
    arr.push("fizz")
  } else if (i % 5 == 0){
    arr.push("bizz")
  } else {
    arr.push(i)
  }
}

console.log(arr)

}

fizzbizz(15)
