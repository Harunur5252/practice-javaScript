/*
 See Array all method on mdn site.

*/

const arr = [1,2,3,4,5];


// adding element at the end of the array
console.log(arr.push(6,[10,11])); // change original array
console.log(arr); // main array has changed for reference data type.


// removing element at the end of the array
console.log(arr.pop(6)); // change original value and 6 means array index
console.log(arr);


// adding element at first of the array
console.log(arr.unshift(0));
console.log(arr);


// removing element at first of the array
console.log(arr.shift(0));
console.log(arr);


// Using the slice method
console.log(arr.slice(0,2));
console.log(arr); // not change real array


// using the splice method 
console.log(arr.splice(0,2))
console.log(arr) // change real array


// concat an array with other array
console.log(arr.concat(['harun'])); // not changing original array
console.log(arr);


// emptying an array
console.log(arr.length=0)
console.log(arr); // empty array 


// specific item update splice method
const newArray = ['I','love','programming']
// console.log(newArray.splice(0,2,'we')) // 0 means index and 1 means 1 item will delete. that means 0 index delete and add on 0 index by 'we'.
// console.log(newArray)


console.log(newArray.slice(1)) 
console.log(newArray)





// console.log(arr.splice(0,2,10)); // return an array and change the original array
// console.log(arr);

// const arrayNew = arr.slice(1); // return an array and not change the original array
// console.log(arrayNew);
// const addNewArray = ['we',...arrayNew]; // ... means spread operator and spread an array
// console.log(addNewArray);
// var arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]); // add an array in arr2 variable
// console.log(arr2);



// const numbers = [19, 23, 14, 56, 32, 65, 10, 45];

// const findNum = numbers.map(function(theNum) {
//     return theNum === 65;
//  })
//  const find= numbers.findIndex(number => number === 65);
//  console.log(find)


// at method
// const atArray = [5, 12, 8, 130, 44];
// console.log(atArray.at(2))
// let index = 2;
// console.log(`Using an index of ${index} the item returned is ${atArray.at(index)}`);
// // expected output: "Using an index of 2 the item returned is 8"
// index = -2;
// console.log(`Using an index of ${index} item returned is ${atArray.at(index)}`);
// // expected output: "Using an index of -2 item returned is 130"




