const productPrice = 100;
let freeShipping = false;
let handPicked = false;

freeShipping = productPrice >=100 ? true:false; // here productPrice >=100 condition is convert to boolean value(true or false)
handPicked   = productPrice >=60 ? true:false;  // here productPrice >=60 condition is convert to boolean value(true or false)


console.log(handPicked)
console.log(freeShipping)


/*
  convert string to number use : Number('2')
  convert number to string use : firstInt(3)
  JavaScript own convert any condition to boolean value(true or false) : Boolean('samim')
  If a mathematical calculation is not possible then JavaScript will be given NaN value.
  if() this parenthesis inside any type of data is converted in Boolean.you can give number,string etc.
*/


let number1 = '1'
console.log(typeof number1) 

let string1 = Number(number1)  // convert string to number.
console.log(typeof number1) 

let number2 = 'samim'
let a = Number(number2)
console.log(Number(number2)) // not possible but output will NaN value.

let number3 = + '1' // it's also convert string to number
console.log(typeof number3) 

let booleanValue = !'samim' // if we set !(Logical operator) before any permeative data type value then it's  convert boolean value(true or false) and give opposite value instead of real value.
console.log(booleanValue)  // answer is false.


