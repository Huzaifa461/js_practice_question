function reverse_words(str){
    

    let arr= str.split(' ')
    let result;
   
    
  
    result= arr.map( str=> {
        return  str.split('').reverse().join('')
       
    })

    // or

    //  result= arr.map( str=>  str.split('').reverse().join(''))

    // or

    // result=arr.filter( i => {
    //    arr[i].reverse()
    //     return  true})
//    or

    // let result = str.split('').reverse().join().split(' ').reverse().join(' ')

    
    console.log(result)

}

reverse_words('hello sam')


// In this question i learn about map and filter function



