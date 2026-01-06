// =============================================================reverse string==========================================================

const rev=(str)=>{
let reverse=''
for(let i=str.length-1; i>=0;i--){
  console.log(`${i} = ${str[i]}`)
    reverse+= str[i]
}
return reverse
}

console.log(rev("hello"))
// ---------------------------------------------------------------reverse number============================================


let num = 123;
let rev_num = "";

function reverse() {
  while (num > 0) {
    let digit = num % 10;
    rev_num += digit;
    num = Math.floor(num / 10);
  }
  return rev_num;
}

console.log(reverse());

// -----------------------------------------------------------------------------------------------------------------------------------


// Expression               	Result	            Meaning
// num % 10	                remainder	        extracts last digit
// num / 10	                decimal result	    divides by 10 (not useful alone)
// Math.floor(num / 10)  	    integer         	removes last digit