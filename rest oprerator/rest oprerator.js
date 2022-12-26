/*
  The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
  A function definition can have only one ...restParam and given at the last.

  if we use rest in array then return an array. if we use it in object then return object
  If we use it function as parameter that takes multiple arguments then return array
*/

// Syntax
function f(a, b, ...theArgs) {
    // ...
}



function sum(...theArgs) { // only as last parameter we can use rest operator
    return theArgs.reduce((previous, current) => {
      return previous + current; // means previous = previous + current. reduce an array method
    });
  }
  
  console.log(sum(1, 2, 3)); // expected output: 6
 
  
  console.log(sum(1, 2, 3, 4));  // expected output: 10




// very easy to convert arguments object to an array using rest operator
  function myFun(a, b, ...arguments) {
    console.log("a", a)
    console.log("b", b)
    console.log("arguments", arguments)
  }
  
  myFun("one", "two", "three", "four", "five", "six");


  
// As rest operator give an array so, we can use array helper method easily.
  function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
      return multiplier * element
    })
  }
  
  let arr = multiply(2, 15, 25, 42)
  console.log(arr)  // [30, 50, 84]



  