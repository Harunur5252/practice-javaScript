/*
 for of -> exactly maintain order that's why we can use it an array as array has order;
 for in -> not maintain order that's why we can use it an object.

*/

// we can use for of loop in array
const arr=['I','love','programming'];

for (const el of arr) {
    console.log(el)
}


// we can use for in loop in object
const product={
    productName:'Jackfruit',
    productIsAvailable:true,
    productQuantity:22,
    productQuality:'good'
}


for (const el in product) {
    console.log(el+': ', product[el])
}


