/*
 *** But here have still some problems.As two object has separate.
const productObj1={
    productName:'Mango',
    isAvailable:true,
    quality:'good',
    quantity:23
}
const productObj2={
    productName:'Banana',
    isAvailable:true,
    quality:'good',
    quantity:50
}
function productInfo({productName,isAvailable,quality,quantity}){ 
     
     return (
         `product name : ${productName}, isAvailable : ${isAvailable},
          quantity : ${quantity}, quality : ${quality}`
     );
  }
  
  const product1 = productInfo(productObj1);
  const product2 = productInfo(productObj2); 
  
  console.log(product1);
  console.log(product2);
  */


  /*
     *** we can use a product variable that we can keep productObj1 and productObj2 object in array
     Because here two object are products and we can have two object in a big product category using an array 
     for better data structuring. 

const product = [
    {
        productName:'Mango',
        isAvailable:true,
        quality:'good',
        quantity:23
    },
    {
        productName:'Banana',
        isAvailable:true,
        quality:'good',
        quantity:50
    }
];


function productInfo(product){ 
    //  console.log(product)
    const [product1,product2]=product; // Array destructuring.  During array destructuring name is not fact but serial is main priority and if we don't need to see a value from array then destructuring you can use comma for skip. 
    // console.log(product2)
    return (
        `product name : ${product1.productName}, isAvailable : ${product1.isAvailable},
         quantity : ${product1.quantity}, quality : ${product1.quality}`
    );
 }
 
 const product1 = productInfo(product);
 
 console.log(product1);
  */

