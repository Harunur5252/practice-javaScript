/*
  for loop has some problem
   1. has a specific start and end 
   2. each steps have been told how works
   3. time consuming
   that's why many alternative loop arises.
*/


const products = [
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
    let singleProduct='';
    // while loop

    // let index=0;
    // while(index<product.length){
    //      singleProduct += `
    //       productName-${product[index].productName},isAvailable-${product[index].isAvailable},
    //       quantity-${product[index].quantity},quality-${product[index].quality}
    //     `;
    //     index++;
    // }
    

    // plane for loop
    // for (let index = 0; index < product.length; index++) { // we can not use return in loop.because execution is stop of loop
    //     singleProduct += `
    //       productName-${product[index].productName},isAvailable-${product[index].isAvailable},
    //       quantity-${product[index].quantity},quality-${product[index].quality}
    //     `;
    // }


    // forEach loop
    // product.forEach(function(product) {
    //     console.log(singleProductItem)
    //     singleProduct += `
    //       productName-${product.productName},isAvailable-${product.isAvailable},
    //       quantity-${product.quantity},quality-${product.quality}
    //     `;
    // });


    //for of loop
    for (const singleProductItem of product) {   
        singleProduct += `
          productName-${singleProductItem.productName},isAvailable-${singleProductItem.isAvailable},
          quantity-${singleProductItem.quantity},quality-${singleProductItem.quality}
        `;
    }    
    return singleProduct;
 }
 
 const product1 = productInfo(products);
 
 console.log(product1);


 /*
   Exercise : Write a function that will take the input(name)
              reverse it(ex:mimas) and finally return it.
 */

// solution :

const name = 'samim';

function reverseName(name){
    if(typeof name === 'string'){
        return name.split('').reverse().join('');
    }else{
        return 'please,give an input as string'
    }
}

console.log(reverseName(name));