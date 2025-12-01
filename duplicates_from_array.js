function RemoveDuplicates(arr){
  let result=[]
  for(let i=0; i<arr.length; i++){
    if(!result.includes(arr[i])){
        result.push(arr[i])
    }
  }
  console.log(result)
}

RemoveDuplicates([1,2,3,4,5,5,3,6,'a','a'])
// ---------------------------------------------------------------------------------------------------------------------------------

function Rmv_duplicate(arr){
let result = [...new Set(arr)]
console.log(result)
}
Rmv_duplicate([1,2,3,4,4,6,2,1])