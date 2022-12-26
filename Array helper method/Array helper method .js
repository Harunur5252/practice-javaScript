/*
** Array helper method
  1.Map
  2.Filter
  3.Find
  4.every
  5.some
  6.reduce
*/

// map - array helper method
// 1) works like regular looping
// 2) work with array
// 3) return a new array(with modified or without modified element)
// 4) Don't mutating (change) the original array

//  const arr = ['I','love','programming'];
//  const mapArr = arr.map(el=> el==='programming' ? el+'!' : el); // take a callback function
//  console.log(mapArr);
//  console.log(arr); // don't change the original array


 
// filter - array helper method
// 1) works like regular looping
// 2) work with array
// 3) return a new array with elements (based on some condition)
// 4) Don't mutating (change) the original array

//  const arr = ['I','love','programming'];
//  const filterArr = arr.filter(el=>el.includes('mm') && el);
//  console.log(filterArr);
//  console.log(arr); // don't change the original array



 
// find - array helper method
// 1) works like regular looping
// 2) work with array
// 3) return a single value(based on some condition)
// 4) Don't mutating (change) the original array


// const arr = ['I','love','programming'];
// const findArr = arr.find(function(el){
//     return el.length>3 && el; // return only first element which is first satisfied although have satisfied with 'programming' value.
// })
// console.log(findArr);
// console.log(arr); // don't change the original array

// function findElm(recArr,searchElm){
//   return recArr.find((elm)=>{
//     return   elm === searchElm  // as condition is true then find return that value(3).
//    })
// }

// const nums = [1,2,3,4];
// console.log(findElm(nums,3))




// every - array helper method
// 1) works like regular looping
// 2) work with array
// 3) return true or false(based on some condition)
// 4) Don't mutating (change) the original array


// const arr = ['l','love','lprogramming'];
// const everyArr = arr.every(function(el){
//   return el.includes('l') && el  // should be true of all elements
//   // return typeof el === 'string'
// })

// console.log(everyArr);
// console.log(arr); // don't change the original array



// some - array helper method
// 1) works like regular looping
// 2) work with array
// 3) return true or false(based on some condition)
// 4) Don't mutating (change) the original array


// const arr = ['I','love','programming'];
// const someArr = arr.some(function(el){
//   return el.includes('l') && el // should be true at least one element
// })

// console.log(someArr);
// console.log(arr); // don't change the original array



// reduce - array helper method
// 1) works like regular looping
// 2) work with array
// 3) return reduce value that means every elements are combined to turn a single value
// 4) Don't mutating (change) the original array

const arr = ['I','love','programming'];
const reduceArr = arr.reduce(function(accumulator,currentValue){
    return accumulator+' '+currentValue;
},'we');
console.log(reduceArr);
console.log(arr); // don't change the original array



// const arr=[10,20,30];
// const reduceSum = arr.reduce((ac,cu)=>{
//    return ac+cu;
// },0)
// console.log(reduceSum);




// findIndex - array helper method
// 1) work with array
// 2) return index value (based on condition)
// 3) Don't mutating (change) the original array


// const arr=[10,20,30];
// const checkIndex = arr.findIndex(function(el){
//    return el===30; // index number is 2
// })
// console.log(arr[checkIndex]);
// console.log(arr);



/*
  #### practice array helper method use

*/

// map 
// const arr1 = [1,2,3,4];
// const multiplyArray = arr1.map((el,index,array)=>{
//   const multiply = array;
//   return multiply;
// })
// console.log(multiplyArray);

// let kvArray = [{key: 1, value: '10'},
//   {key: 2, value: 20},
//   {key: 3, value: 30}]

//   let reformattedArray = kvArray.map(obj => {
//   let rObj = {}
//   rObj[obj.key] = obj.value
//   console.log(rObj[obj.key])
//   return rObj
// })
// console.log(reformattedArray);

// Mapped array contains undefined
// let numbers = [1, 2, 3, 4]
// let filteredNumbers = numbers.map(function(num, index) {
//   if (index < 3) {
//      return num
//   }
// })
// console.log(filteredNumbers);



// filter

// const arr1 = [1,2,3,4];
// const evenArray = arr1.filter((el)=>{
//    return el%2===0 && el;
// })
// console.log(evenArray);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
//console.log(result);

// function isBigEnough(value) {
//   return value >= 10
// }

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// console.log(filtered)

// const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(array.filter(isPrime));

// let arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   { },
//   { id: null },
//   { id: NaN },
//   { id: 'undefined' }
// ]

// let invalidEntries = 0;

// function filterByID(item) {
//   console.log(item);
//   if (Number.isFinite(item.id) && item.id !== 0 && item.id!=='') {
//     return true;
//   }
//   invalidEntries++;
//   return false;
// }

// let arrByID = arr.filter(filterByID)

// console.log('Filtered Array\n', arrByID);

// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
// function filterItems(arr, query) {
//   return arr.filter(function(el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   })
// }
// console.log(filterItems(fruits, 'ap')); 
// console.log(filterItems(fruits, 'an')); 


// let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present'];

// const modifiedWords = words.filter( (word, index, arr) => {
//   arr[index+1] +=' extra';
//   return word.length < 6;
// });
// console.log(modifiedWords);

// Appending new words using filter
// words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
// const appendedWords = words.filter( (word, index, arr) => {
//   console.log(arr)
//   arr.push('new')
//   return word.length < 6
// })
// console.log(appendedWords);

// Deleting words
// const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
// const deleteWords = words.filter( (word, index, arr) => {
//   arr.pop();
//   return word.length < 6;
// })

// console.log(deleteWords);

// some
// const fruits = ['apple', 'banana', 'mango', 'guava'];
// function checkAvailability(arr, val) {
//   return arr.some(function(arrVal) {
//     return val === arrVal;
//   });
// }

// console.log(checkAvailability(fruits, 'kela'));
// console.log(checkAvailability(fruits, 'banana'));

// some
// const TRUTHY_VALUES = [true, 'true', 1];

// function getBoolean(value) {
//   if (typeof value === 'string') {
//     value = value.toLowerCase().trim();
//   }
//   return TRUTHY_VALUES.some(function(t) {
//     console.log(t)
//     return t === value;
//   });
// }

//  console.log(getBoolean(false))
//  console.log(getBoolean('FALSE'))
//  console.log(getBoolean(1))
//  console.log(getBoolean('TRUE'))

// findIndex
// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 5;

// console.log(array1.findIndex(isLargeNumber));

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
// console.log([4, 6, 7, 9, 12].findIndex(isPrime));



