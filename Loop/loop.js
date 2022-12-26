
  /*
  
  *** loop can help for reducing same code repetition.loop has start and end

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
    let singleProduct='';
    let index=0;
    while(index<product.length){
          singleProduct += `
          productName-${product[index].productName},isAvailable-${product[index].isAvailable},
          quantity-${product[index].quantity},quality-${product[index].quality}
        `;
        // we should remind that any string that is empty or full if add another preemptive data type then it will covert to string.
        index++;
    }
    // for (let index = 0; index < product.length; index++) { // we can not use return in loop.because execution is stop of loop
    //     singleProduct += `
    //       productName-${product[index].productName},isAvailable-${product[index].isAvailable},
    //       quantity-${product[index].quantity},quality-${product[index].quality}
    //     `;
    // }
    console.log(singleProduct)
   
    return singleProduct;
 }
 
 const product1 = productInfo(product);
 
 console.log(product1);



 var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
 console.log(myStr);







*** alternative way for better performance

const passedProduct = [
  {
    productName: 'Rice',
    productPrice: 30,
    productQuantity: 3,
    productAvailable: true
  },
  {
    productName: 'Daal',
    productPrice: 50,
    productQuantity: 10,
    productAvailable: true
  }
]
 
function showProductInfo(product) {
  let productInfo = ''

  for (let i = 0; i < product.length; i++) {
    const {
      productName,
      productPrice,
      productQuantity,
      productAvailable
    } = product[i]

    productInfo += `productName- ${productName} productPrice-${productPrice} productQuantity-${productQuantity}
      ${productAvailable} \n`
  }

  return productInfo
}


console.log(showProductInfo(passedProduct))

*/






