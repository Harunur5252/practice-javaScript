let freeShipping=false;
let handPicked = false;
const productPrice=100;

freeShipping= productPrice>=60?true:false; // here no grouping like as if..elseif..else
handPicked= productPrice<=60?true:false; // here no grouping like as if..elseif..else

console.log(freeShipping);
console.log(handPicked);

