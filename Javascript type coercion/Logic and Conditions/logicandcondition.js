const productPrice = 100;
let freeShipping = false;
let handPicked = false;

// if(productPrice >= 100){
//   freeShipping = true;
//   handPicked = false;
// }else if(productPrice >=60 && productPrice<100){
//    freeShipping  = false;
//    handPicked = true
// }else{
//     freeShipping  = false;
//     handPicked = false
// }
// console.log(freeShipping)
// console.log(handPicked)


freeShipping = productPrice >=100 ? true:false;
handPicked   = productPrice >=60 ? true:false;


console.log(handPicked)
console.log(freeShipping)