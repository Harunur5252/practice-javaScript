/*

   if condition is too large(that means if..else if..else..if else..if....) or a single value for depending on a decision
   then we can use switch statement.
  **** disadvantage :  matching exact value.
  **** case (true && 'harun') // it will be a string('harun') and it's also called short circuit
*/




// let productPrice = 100;
// let freeShipping =false;
// let handPicked = false;

// switch (productPrice) {
//     case (productPrice>=100 && productPrice): // it will be a number(100) if matching with productPrice;
//         freeShipping=true;
//         handPicked = false;
//         break;
//     case (productPrice>=60 && productPrice):
//         freeShipping=false;
//         handPicked = true;
//         break;

//     default:
//         freeShipping=false;
//         handPicked = false;
// }

// console.log(freeShipping)
// console.log(handPicked)


/*
  short circuit : true addiction.
*/

const var1=10; // truthy value
const var2=20; // truthy value
const var3=30; // truthy value


console.log(var1 && var2 && var3); // short circuit and output is 30.

// If && is get false value then it's not needed to check true value and don't occur shot circuit
// If && is get true value then it's  needed to check that next value is true or false and then occur shot circuit
// If || is get false value then it's needed to check that next value is true or false and then occur shot circuit
// If || is get true value then it's not needed to check true value and don't occur shot circuit


