function findVowels(str){
    let count=0
    for(let i=0; i<str.length ; i++){
     if(str[i]== 'a' || 'e' || 'i' || 'o' || 'u'){
        count++
     }
     
    }
    console.log(count)
}
// findVowels("huzaifa")

// Your condition:
// if (str[i] == 'a' || 'e' || 'i' || 'o' || 'u')


// You think JavaScript reads it like this:

// (str[i] == 'a') OR (str[i] == 'e') OR (str[i] == 'i') ...


// But JavaScript does NOT read it this way.

// ❌ What JavaScript actually does

// JavaScript reads your condition like this:

// (str[i] == 'a') OR ('e') OR ('i') OR ('o') OR ('u')


// Now ask:
// Is the string 'e' truthy or falsey?

// ➡️ 'e' is a non-empty string, so it is truthy.
// Same for 'i', 'o', 'u'.

// So your condition becomes:

// if (something OR true OR true OR true ...)



// -----------------------------------------------------correct way---------------------------------------------------------------------------------

function checkvowels(str){
    let count=0;
    let vowels='aeiou'
    for(let i=0 ; i<str.length ; i++){
        if(vowels.includes(str[i])){
            console.log(str[i])
            count++;
        }

        


    }
   
    console.log(count)
}
checkvowels('huzaifa')