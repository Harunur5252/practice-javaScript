/*

spread operator is used in copying array,object or part of
the array,object(only array,object elements copy).
we can use copy an array or object using spread operator.

*/

const arr1=['I','love','Programming'];
const arr2=['We','love','Programming'];

// const arr3=arr1.concat(arr2); // but not add 'and' by concat method.
const arr3=[...arr1,'and',...arr2]; // not change real array
console.log(arr3);




// const product={
//     productName:'Jackfruit',
//     productIsAvailable:true,
//     productQuantity:22,
//     productQuality:'good'
// }

// const updateProduct={
//     ...product,
//     updateKey:'updated'
// }
// console.log(updateProduct);



// function sum(x,y,z) {
//   console.log(x,y,z) // output is 1,2,3
//      return x + y + z;
// }
  
  //  const numbers = [1, 2, 3];
  
  //  console.log(sum(...numbers));
//   // expected output: 6
  
  // console.log(sum.apply(null, numbers)); // numbers of apply method that received a function parameters as exact order
//   //expected output: 6




// It is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition. A very simple version of this kind of action could look like so:
// let numberStore = [0, 1, 2];
// let newNumber = 12;
// numberStore = [...numberStore, newNumber];
// console.log(numberStore);



/* MDN
****Spread in function calls
    1.Replace apply()
    2.Apply for new operator
    3.Spread in object literals
*/

// Replace apply() method without spread operator.

function myFunction1(x, y, z) {
  console.log(x+y+z);
 }
let args1 = [0, 1, 2];
myFunction1.apply(null, args1); // with apply method. here apply method fist input can take string value and second one can take an array. But by spread we can easily works this type of action.


// this is easy from above apply method.
function myFunction2(x, y, z) { 
  console.log(x+y+z);
}
let args2 = [0, 1, 2];
myFunction2(...args2);  // direct as arguments with spread operator.



// Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.
function myFunction3(v, w, x, y, z) {
  console.log(v+w+x+y+z);
}
let args3 = [0, 1];
myFunction3(-1, ...args3, 2, ...[3]); // using spread operator.


// Apply for spread operator for Date() function

let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);
console.log(d)



// Copy an array by spread operator.
let newArray1 = [1, 2, 3];
let newArray2 = [...newArray1]; // like arr.slice()

newArray2.push(...[4,5]);
console.log(newArray2)
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected


// spread operator may be unsuitable for copying multidimensional arrays, 

// let a = [[1], [2], [3]];
// let b = [...a]
// console.log(b)
// b.shift().shift()
//  Oh no!  Now array 'a' is affected as well:
// console.log(a)
//  [[], [2], [3]]



// let arr5 = [0, 1, 2];
// let arr6 = [3, 4, 5];

// Append all items from arr2 onto arr1.But not like spread operator flexibility and not add more value in array. 
// arr6 = arr5.concat(arr6); // not change real array.
// console.log(arr6)



// let arr5 = [0, 1, 2];
// let arr6 = [3, 4, 5];

// //  Append all items from arr2 onto arr1
// arr6 = [...arr5,...arr6] // this array you can add more value only for using spread operator.
// console.log(arr6)



// Array.prototype.unshift() is often used to insert an array of values at the start of an existing array. Without spread syntax, this is done as:

// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
// console.log(Array.prototype.unshift.apply(arr1, arr2))
//  arr1 is now [3, 4, 5, 0, 1, 2]




// Spread operator in object literals

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
console.log(clonedObj)
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }; 
console.log(mergedObj) // Output is  { foo: "baz", x: 42, y: 13 }.Because of same key of two obj1 and obj2 foo name. so two foo merged.
