// **** function return have benefit that is any time we can use return 
//      and can give return only one time.If you give multiple return then it will not work. Only one return
//      will work that is first return statement.After return statement if you give more statement is not working.





// function return a function and how to way call return function.

function welcomeMsg(name) {
    console.log('Welcome Mr. ' + name);
    return function options(menu) {
        console.log('Do you like ' + menu + ' Mr. ' + name);
    }
}

welcomeMsg('Zonayed Ahmed')('coffee'); // passing two argument first one for welcomeMsg and the second one for options function parameter.




function great(lan,name){
    if(lan === 'en'){
        return `Hello ${name}`;
    }
    return `Hola ${name}`;
}

console.log(great('bn','samim'));



const product = [
    {
        productName:'Mango',
        isAvailable:true,
        quality:'good',
        quantity:23
    },
    {
        productName:'Banana',
        isAvailable:false,
        quality:'good',
        quantity:50
    }
];

function productInfo(product){ 
    let singleProduct='';
    // for (let index = 0; index < product.length; index++) { // we can not use return in loop.because execution is stop of loop
    //     singleProduct += `
    //       productName-${product[index].productName},isAvailable-${product[index].isAvailable},
    //       quantity-${product[index].quantity},quality-${product[index].quality}
    //     `;
    // }
    for (const singleItemProduct of product) {
        const {productName,isAvailable,quantity,quality}=singleItemProduct;
        // In template string we can write full javaScript code.
         singleProduct += ` 
          productName-${productName},isAvailable-${isAvailable},
          quantity-${quantity},quality-${quality}
          ${isAvailable?'In-stock':'Out-stock'} 
        `;
    }
    return singleProduct;
 }
 
 const product1 = productInfo(product);
 
 console.log(product1);


