/*
 rest operator take multiple parameter when you used in array(return array) or object(return object) but spread give plane value

*/

const arr1=['I','love','programming'];
const arr2=['We','love','web development'];

const [...restValue]=arr1; // for destructuring rest can use for once all.

console.log(restValue) // rest return an array




const product={
    productName:'Banana',
    productIsAvailable:true,
    productPrice:2000,
    productQuantity:40
}

const {productName,...restObjValue}=product; // for destructuring rest can use for once all.
console.log(productName,restObjValue)



const updateProduct={
    ...product, // copy product object elements
    updateKey:'update'
}

console.log(updateProduct)



