/*
*** this example has still problem.Here data structure we have used object and then object 
    we have passed in function showProductInfo(productInfo1) as arguments. Here object and 
    function is separate and it seems low structuring. And this function call function.
     
const productInfo1={
    productName:'banana',
    productPrice:30,
    productQuantity:3,
    productIsAvailable:true
}

function showProductInfo(product){
  console.log(product)
}

showProductInfo(productInfo1)
*/


/*
  But here we have written inside of object data type of function works. This function is called method
  that means when we wrote inside of object function then it will be called method. Here we have also used this instead of
  using productInfo1.Because object name can be varied for any situation but this dynamically means of that 
  object. so, always use this for accessing an object property if we use a method or property in object data type.

  const productInfo1={
    productName:'banana',
    productPrice:30,
    productQuantity:3,
    productIsAvailable:true,
    showProductInfo:function displayProductInfo(){ // function name is given better for future code debugging or find an error.
        return `productName-${this.productName},productIsAvailable-${this.productIsAvailable},productPrice-${this.productPrice},productQuantity-${this.productQuantity}`; 
        // Always use this keyword without using productInfo1 for changing object name.
    }
}

console.log(productInfo1.showProductInfo());
    
*/






