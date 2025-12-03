function reverse_words(str){
    // let result = str.split('').reverse().join().split(' ').reverse().join(' ')

    let arr= str.split(' ')
    let result;
   
    // result=arr.filter( i => {
    //    arr[i].reverse()
    //     return  true
    // })
    result= arr.map( str=> {
        return  str.split('').reverse().join('')
       
    })

    // or

    //  result= arr.map( str=>  str.split('').reverse().join(''))

    
    console.log(result)

}

reverse_words('hello sam')