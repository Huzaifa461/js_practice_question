function sum_ele_array(arr){
    let arr1=arr.join('').replace(/[^0-9]/g,'')
    arr1= [...arr1].map(Number)
 const result= arr1.reduce((num, acc)=> num+=acc,0)
 console.log(result)
}

sum_ele_array(['go',10,2,3,4,5,'h'])

// ---------------------------------------------------shorter version------------------------------------------------------------------------

function sum_ele_arr(arr){
  const result = [...arr.join('').replace(/[^0-9]/g,'')]
    .reduce((acc, n) => acc + Number(n), 0);

  console.log(result);
}

sum_ele_arr([2,3,4,'re',435,'f'])