/*
  ** primitive data type when we compare between them
     is  check their value but not check their
     exact memory location.On the other hand, object data type/reference
     type/complex type is compare their exact memory location.
*/


// primitive data type compare
const a = 10;
const b= 10;
console.log(a===b); // comparing primitive


// complex data type 
const aObj={a:10};
const bObj={a:10};
console.log(aObj.a===bObj.a) // comparing primitive
console.log(aObj===bObj); // comparing memory location





