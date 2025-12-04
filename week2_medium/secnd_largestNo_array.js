function secnd_largest_num(){
const arr = [4, 7, 2, 9,9,9, 5];

// Step 1: Filter out numbers less than the maximum
const max = arr.filter(num => num === Math.max(...arr))[0];
console.log(max)
// console.log(max[0]); // Output: 9

const  filter=arr.filter(num=> num!==max) // max is an array and num is an element of an array therfore all element get passed in filter array that's why we put index [0] at line 5 

console.log(filter)
console.log( Math.max(...filter))

}

// secnd_largest_num()


