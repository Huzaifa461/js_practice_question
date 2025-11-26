function even_odd(num){
(num%2===0)? console.log(`${num} is an even number`): console.log(`${num} is an odd number and , reminder ${num%2} , quotient : ${num/2}`)
}

even_odd(Math.floor(Math.random()*100 +1))