function minMax_array(arr){
 let mini= Math.min(...arr)
 let maxi= Math.max(...arr)
console.log(mini , maxi)
}

// minMax_array([-Infinity , 1,2,3,4,5,33])

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

let obj={
    
    name: "sam",
    details : {age : 12}
   

}

let obj1 = {...obj} 
// wrong ❌ [...obj]  
// the spread operator (...) inside an object literal {} copies the own enumerable properties(properties which can be iterable) of obj into a new object. Unlike [...obj] (which requires iterables), {...obj} works because objects can be spread into other objects.

obj1.details.age = 20;

console.log(obj.details.age); // 20 (because it's the same reference!)
// If obj had nested objects/arrays, only the references are copied (not deep cloned).
 console.log(obj1)

//  ---------------------------------------------------------------------------------------------------------------------------------------

let obj0 = { name: "sam" };

// Spread → always creates a new object
let copy1 = { ...obj };
copy1.name = "alex";
console.log(obj0.name); // "sam" (original unchanged)

// Object.assign → mutates target
let copy2 = Object.assign(obj, { age: 12 });
console.log(copy2); // { name: "sam", age: 12 }
console.log(obj);   // { name: "sam", age: 12 } (original changed!)



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// What is a SHALLOW COPY?
// A shallow copy of an object is a new object that has copies of the top-level properties of the original.

// Primitive values (like numbers, strings, booleans) are copied directly.

// Objects or arrays inside are not duplicated — instead, their references are copied.

// So the new object still points to the same nested objects as the original.

// ✅ Example

// let obj = {
//   name: "sam",
//   details: { age: 12 }
// };

// let copy = { ...obj }; // shallow copy

// copy.details.age = 20;

// console.log(obj.details.age); // 20 (changed!)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Contrast with Deep Copy
// A deep copy duplicates everything, including nested objects, so the new object is completely independent.


// let obj = {
//   name: "sam",
//   details: { age: 12 }
// };

// // Deep copy using structuredClone (modern JS)
// let deepCopy = structuredClone(obj);

// deepCopy.details.age = 20;

// console.log(obj.details.age); // 12 (unchanged)
