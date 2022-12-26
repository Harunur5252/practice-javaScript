/*
**** helps to avoid to code repetition.function can take input
**** when we call a function on that time we can pass any data type as arguments and 
function received those arguments as parameter value.function can return then return value we can use later or future work. 


***functional programming : don't change data source (Mailable mutable)
     code reuse and individual actionrepreZa

*/


/*
function square(length,width){
  return length*width;
  console.log('harun00'); // not working because of giving a return statement.
}
const output = square(2,2);
console.log(output);
*/



/*
// callback function
function callMyName(name, callback) {
    var myAge = 20;
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr.' + name);
}

function hello(age) {
    console.log('I am passed through argument and my age is: ' + age);
}

callMyName('Zonayed Ahmed', hello);
*/




/*
// function can take input and receiving. this input we can tell argument and function receiving this input we can tell parameter.function receiving multiple parameter.

const productObj1={
    productName:'Mango',
    isAvailable:true,
    quality:'good',
    quantity:23
}
const productObj2={
    productName:'Mango',
    isAvailable:true,
    quality:'good',
    quantity:23
}

function productInfo(productData,productName='product2'){ // productName is default parameter 
   return `${productName}-> product name : ${productData.productName}, isAvailable : ${productData.isAvailable},
   quantity : ${productData.quantity}, quality : ${productData.quality}`;
}

const product1 = productInfo(productObj1,'product1');
const product2 = productInfo(productObj2); // if you don't give second value but function will received default parameter and return result;

console.log(product1);
console.log(product2);
*/   




/*
  But above function has still a problem and not well organized. Problem is that productData parameter 
  have used many times in return statement and as it is an object and we called again it by dot notation(.) to access object
  property. But we can solve this problem using Object destructuring. Below is given example ---

const productObj1={
    productName:'Mango',
    isAvailable:true,
    quality:'good',
    quantity:23
}
const productObj2={
    productName:'Mango',
    isAvailable:true,
    quality:'good',
    quantity:23
}

function productInfo(productData,whichProduct='product2'){ // whichProduct is default parameter 
    
  *** when we use Object destructuring that one thing can set mind is that Object accept object as parameter
      and of that object property key name is exactly same property key name when we are destructuring and those destructuring
      value will represent similar like a variable name and then we can use those variable in return statement for reducing code.
      we can also use object destructuring anywhere for yor requirement.
    
   // when destructure an object that's one thing we should remind is that destructuring serial is not fact but destructuring name as similar to an object key name.We can use everywhere object destructuring for an object.
   const {productName,isAvailable,quality,quantity}=productData; // you can use this {productName,isAvailable,quality,quantity} directly as parameter as it is an object.
  
   return (
   
       `${whichProduct}-> product name : ${productName}, isAvailable : ${isAvailable},
        quantity : ${quantity}, quality : ${quality}`
   );
}

const product1 = productInfo(productObj1,'product1');
const product2 = productInfo(productObj2); // if you don't give second value but function will received default parameter and return result;

console.log(product1);
console.log(product2);
*/











// for more practice functions

/*
function myFunc1(theObject) {
  console.log(theObject)
    return theObject.make = 'Toyota';
  }
   
   var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  console.log( myFunc1(mycar));
   
   var myFunc2;
   let num = 0;
 if (num === 0) { // a function can be defined based on a condition
   myFunc2 = function(theObject) {
     return theObject.make = 'Toyota';
   }
 }
 
 console.log(myFunc2(mycar));
*/


/* **** code reuse ,individual action(single responsibility principle)
function great(){

  const var1='var1';
  const var2='var2';
  return { // if we need to return two variable. we can use array or object or template string.
    var1:var1,
    var2:var2
  };
  return 'hi'; // not working. only one return can work
  console.log('harun'); // not working.after return any task not work
}
const myGreet = great();

console.log(myGreet.var1);
*/



/*
function great(helloGreet,num1,num2,num3){ // exact order take argument in parameter

  console.log(num1,num2,num3);
  return helloGreet+' samim';
  
}
const myGreet = great('hello',1,2,3);
console.log(myGreet);
*/


/*
function greet(greetings){ 

 return function inner(name){ // can also return this before function 
    return (greetings+name);
  }
  
}

// console.log(greet('hello')('samim'));
 const myGreet = greet('hello');
 console.log(myGreet('harun'));
*/


/*
function sayHI({name,greetings}){ // obj destructuring in parameter
  return `${greetings} ${name}`;
}


console.log(sayHI({
  name:'samim',
  greetings:'hi'
}));
*/



// function sum(array){
//   let sum=0;
//   if(!Array.isArray(array)) return 'please provide a array';
//   for (const i of array) {
//      sum+=i;
//   }
//   return sum;
// }

// console.log(sum(1,2,3));





// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray
//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//       console.log(row);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//     row=[];
//   }
//   return newArray;
// }
// let matrix = zeroArray(3, 2);
// console.log(matrix);



// const person = {
//   firstName:'harun',
//   lastName:'roshid',
//   age:23
// }

// function personFunc({firstName,lastName,age}){ 
//   return `${firstName}`;
// }
// console.log(personFunc(person)); // if we need to pass many arguments in function parameter we can must use object and there is not necessary to maintain order like array or passing normal arguments











