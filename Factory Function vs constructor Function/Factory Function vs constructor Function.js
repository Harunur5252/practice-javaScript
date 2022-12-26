/*
  ##### factory function can return anything but constructor function can only return object(but not write return keyword. automatically return occur)
  ##### constructor function has this binding.
  constructor function(a blue print) don't produces real(without calling by new keyword) value on the other hand factory function produces real value. 
  But only when new keyword during call any constructor function then it gives real value.that means constructor function is a blue print and produces and 
  created multiple object and value by new keyword. 
  

*/

//factory function 
// function showProductInfo(productName,productPrice,productIsAvailable,productQuantity){
//    return { // If key and value are similar then we can use either key or value as wish in es6.
//         productName,
//         productPrice,
//         productIsAvailable,
//         productQuantity,
//    }
// }

// console.log(showProductInfo('Mango',40,true,'good'))


// constructor function 
// function Product(productName,productPrice,productIsAvailable,productQuantity){
        // this indicates object created after calling of constructor function.
        
//      this.productName=productName; 
//      this.productPrice=productPrice;
//      this.productIsAvailable=productIsAvailable;
//      this.productQuantity=productQuantity;
// }
//  const product1  =  new Product('Mango',40,true,10); 
//  const product2  =  new Product('Banana',25,false,5); 
//  console.log(product1)

 