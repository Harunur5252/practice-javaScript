
// arguments are array like structure consist of values passed to the function. But arguments is not real array so, we can not use array access loop or helper method
// There are two way convert arguments to a real array. 1) spreed operator 2) Array.from(arguments) method.

/*
## How many inputs come from an input(as arguments) if we don't know then we can use two way to solve this problem. 
    we can use arguments when we don't know how many inputs come to a function then can use it and convert it to real array.
    If we don't want to deal arguments then a different way to solve this problem by using rest operator.
*/

// using arguments
// function sum(){
// // const convertArray = Array.from(arguments);
// const convertArray = [...arguments];
//   console.log(convertArray);
//   let total = 0;
//   for (const iterator of convertArray) {
//       total += iterator;
//   }
//   return total;

// }
// console.log(sum(1,2,3))




// using rest parameter
// function sum(num1,...num){ // rest operator return an array this sphere and should declare a rest operator as a last parameter of function.
//     // let total = 0;
//     // for (const iterator of num) {
//     //     total += iterator;
//     // }
//     // return total;

//     return num.reduce((ac,cu)=>{
//         return ac+cu;
//     },num1)


// }
// console.log(sum(1,2,3))

