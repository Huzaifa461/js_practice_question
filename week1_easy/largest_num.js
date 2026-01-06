let arr=[1,2,3,4,5]
let max=arr[0]
function lg_num(arr){
for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
        max=arr[i]
}
console.log(max)
}

lg_num(arr)

// ==================================================================================================================================================

function findLargestNum(arr) {
  return Math.max(...arr); 
}

console.log(findLargestNum([2, 4, 86, 54, 43])); // 86


// ...arr
// Turns array into individual numbers


// If you do:

// Math.max([5, 10, 2])


// ❌ It will NOT work → returns NaN
// Because Math.max expects:

// max(num1, num2, num3)
// NOT
// max([num1, num2, num3])

// ==================================================================================================================================================================

let Arr=[1,2,34,4,4,50]

let largest_number= Arr.reduce((max, num)=> (num>max)? num : max,-Infinity)
console.log(largest_number)

// console.log(new Set(Arr))

let obj={
  num : 1,
  name : "sam"
}

console.log(obj)

console.log([...obj])  /*error*/